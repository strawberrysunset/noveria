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
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
`

const HeaderSticky = styled(Header)`
  position: sticky;
  top: 0;
`

const Main = styled.main`
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 3rem;
  @media (min-width: 48rem) {
    flex-direction: row;
    margin-bottom: 0rem;
  };
`

const NavSticky = styled(Nav)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 3rem;
  border-top: 1px solid ${(props) => props.theme.colors.neutral[200]};
  @media (min-width: 48rem) {
    grid-auto-flow: row;
    border-top: 0;
    border-right: 1px solid ${(props) => props.theme.colors.neutral[200]};;
    position: relative;
    min-width: 4rem;
    max-width: 4rem;
    height: 100%;
  } ;
`

const StyledSwitch = styled(Switch)`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
`

export const App = () => {

  React.useEffect(() => {
    queryCache.prefetchQuery('newsFeed', getNewsFeed)
  }, [])

  return (
    <>
      <GlobalStyling />
      <LoadingScreen css={`z-index: 999;`}/>
      <PopUp css={`z-index: 998;`} />
      <SiteWrapper>
        <HeaderSticky css={`z-index: 4;`}/>
        <Main>
          <MenuFlyout css={`z-index: 3;`}/>
          <NavSticky css={`z-index: 2;`}/>
          <StyledSwitch>
            {pages.map((page, idx) => (
              <Route exact={page.path === '/home'} key={idx} path={page.path} component={page.component} />
            ))}
            <Route component={Error}></Route>
          </StyledSwitch>
        </Main>
      </SiteWrapper>
    </>
  )
}
