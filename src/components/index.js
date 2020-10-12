import React from 'react'
import styled, {css, createGlobalStyle} from 'styled-components/macro'
import {reset} from 'utilities'
import {Nav} from './nav'
import {Header, LoadingScreen} from './misc'
import {MenuFlyout} from './menu'
import {Switch, Route} from 'react-router-dom'
import {pages} from './pages'
import {PopUp} from './misc'
import {Error} from './pages/Error'
import {getSupportedCurrencies, getNewsFeed} from '../api'
import {queryCache} from 'react-query'
import {useNotification, usePortfolio} from '../context'


const GlobalStyling = createGlobalStyle`
  ${reset()};
  * {
    list-style: none;
    vertical-align: middle;
  }
  
  html {
    font-family: 'Overpass', sans-serif;
    
    user-select: none;
    color : ${(props) => props.theme.colors.neutral[1600]};
    list-style: none;
    text-decoration:none; 
    /* overflow-y: auto;  */
  }
  body {
    font-size: ${(props) => props.theme.typeScale.body};
  }
  input, button { 
      border:none;
      outline: none; 
      appearance: none;
      box-sizing: border-box;
      
  } 
  button, a, select{
    cursor: pointer;
  }
  a {
    text-decoration:none; 
    color: inherit;
    cursor: pointer;
    :hover {
      color: ${props => props.theme.colors.neutral[1200]}
    }
    :active {
      color: ${props => props.theme.colors.neutral[800]}
    }
  }
  p {
    margin-bottom: -0.2rem;
  }
`
const SiteWrapper = styled.div`
  background: ${(props) => props.theme.colors.neutral[100]};
  color: ${(props) => props.theme.colors.neutral[1600]};
  height: 100vh;
  max-height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const HeaderSticky = styled(Header)`
`

const Main = styled.main`
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: stretch;
  flex-grow: 1;
  ${props => props.theme.isMobile && css`
    flex-direction: column-reverse;
    margin-bottom: 0rem;
  `}
`

const NavSticky = styled(Nav)`
  display: grid;
  grid-auto-flow: row;
  height: 100%;
  width: 4rem;
  border-top: 1px solid ${(props) => props.theme.colors.neutral[200]};
  ${props => props.theme.isMobile && css`
    grid-auto-flow: column;
    border-top: 0;
    border-right: 1px solid ${(props) => props.theme.colors.neutral[200]};;
    position: relative;
    min-height: 3.5rem;
    max-height: 3.5rem;
    width: 100%;
  `}
`

const StyledSwitch = styled(Switch)`
  flex-grow: 1;
`

export const App = () => {

  const {showPopUp, popUpContent, updateNotification} = useNotification()
  const portfolio = usePortfolio()

  React.useEffect(() => {
    queryCache.prefetchQuery('newsFeed', getNewsFeed)
  }, [])

  React.useEffect(() => {
    if (portfolio.assets.length > 0) updateNotification({type: 'hidePopUp'})
  }, [portfolio])

  return (
    <>
      <GlobalStyling />
      <LoadingScreen css={`z-index: 999;`}/>
      <PopUp showing={showPopUp} handleClose={() => updateNotification({type: 'hidePopUp'})} content={popUpContent}/>
      <SiteWrapper>
        <HeaderSticky/>
        <Main>
          <MenuFlyout css={`z-index: 1;`}/>
          <NavSticky css="grid-area: nav;"/>
          <StyledSwitch css="grid-area: page;">
            {pages.map((page, idx) => (
              <Route exact={page.path === '/'} key={idx} path={page.path} component={page.component} />
            ))}
            <Route component={Error}></Route>
          </StyledSwitch>
        </Main>
      </SiteWrapper>
    </>
  )
}
