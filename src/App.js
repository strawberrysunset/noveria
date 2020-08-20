import React, { useEffect, useState } from 'react';
import {PageRouter} from './routers'
import { colors } from './theme'
import {reset} from 'utilities'
import {Nav} from './components/nav'
import { Header, LoadingScreen } from './components/misc'

import styled, {createGlobalStyle} from 'styled-components'
import {Summary} from './components'


const GlobalStyling = createGlobalStyle`
  ${reset()};
  html {
    font-family: 'Overpass', sans-serif;
  }
  
`

const Wrapper = styled.div`
    background: ${colors.blue[100]};
    width: 100vw;
    height: 100vh;
`
const StickyNav = styled(Nav)`
    position: absolute;
    bottom: 0;
    width: 100vw;
`

export const App = () => {

  const [loadPercentage, setLoadPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoadPercentage(25), 500);
    setTimeout(() => setLoadPercentage(50), 1000);
    setTimeout(() => setLoadPercentage(75), 1500);
    setTimeout(() => setLoadPercentage(100), 2000);
  }, [])

  return (
    <Wrapper>
      <GlobalStyling/>
      {loadPercentage < 100 && <LoadingScreen percentage={loadPercentage}/>}
      <Header/>
      <Summary/>
      <StickyNav/>
    </Wrapper>
  )

  
}

