import React from 'react'
import styled, {css, createGlobalStyle} from 'styled-components/macro'
import {reset} from 'utilities'
import {Nav} from './nav'
import {Header, LoadingScreen} from './misc'
import {MenuFlyout} from './menu'
import {Switch, Route} from 'react-router-dom'
import {Error} from './pages/Error'
import {Home} from './pages/home'
import {Markets} from './pages/markets'
import {News} from './pages/news'
import {Portfolio} from './pages/portfolio'
import {useIsFetching, useQueryCache} from 'react-query'
import {getCoinData, getNewsFeed} from '../api'
import {useSettings} from '../context'

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

const height = window.innerHeight;
const SiteWrapper = styled.div`
  background: ${(props) => props.theme.colors.neutral[100]};
  color: ${(props) => props.theme.colors.neutral[1600]};
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(${css`${height}px`});
  max-height: calc(${css`${height}px`});
  min-width: 20rem;
  overflow-y: none;
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
  /* flex-direction: column; */
  align-items: stretch;
  /* overflow-y: auto; */
  flex-grow: 1;
  ${props => props.theme.isMobile && css`
    flex-direction: column;
    margin-bottom: 3.5rem;
  `}
`

const NavSticky = styled(Nav)`
  display: grid;
  grid-auto-flow: row;
  height: 100%;
  min-width: 4rem;
  ${props => props.theme.isMobile && css`
    width: 100%;
    min-height: 3.5rem;
    max-height: 3.5rem;
    border-right: 1px solid ${(props) => props.theme.colors.neutral[800]};
    
    position: fixed;
    z-index: 5;
    left: 0;
    right: 0;
    bottom: 0;
    grid-auto-flow: column;
  `}
`

const StyledSwitch = styled(Switch)`
  flex-grow: 1;
  
`

export const App = () => {

  const isFetching = useIsFetching()
  const [loading, setLoading] = React.useState(true)
  const queryCache = useQueryCache()
  const {currency} = useSettings()
  
  React.useEffect(() => {
    const loadCoinData = async () => {
      const coinData = await getCoinData({currency})
      const newsFeed = await getNewsFeed()
      queryCache.setQueryData('coinData', coinData)
      queryCache.setQueryData('newsFeed', newsFeed)
    };
    loadCoinData();
  }, [])

  React.useEffect(() => {
    if(isFetching === 0) {
      setTimeout(() => setLoading(false), 3000)
    }
  }, [isFetching, setLoading])

  return (
    <>
      <GlobalStyling />
      {<LoadingScreen loading={loading} css={`z-index: 999;`}/>}
      <SiteWrapper>
        <HeaderSticky/>
        <Main>
          <NavSticky css="grid-area: nav;"/>
          <MenuFlyout css={`z-index: 4;`}/>
          <StyledSwitch css="grid-area: page;">
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/markets" component={Markets} />
            <Route path="/news" component={News} />
            <Route component={Error}></Route>
          </StyledSwitch>
          
        </Main>
      </SiteWrapper>
    </>
  )
}
