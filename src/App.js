import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { PageRouter } from './routers'
import { colors } from './theme'
import { reset } from 'utilities'
import { Nav } from './components/nav'
import { Header, LoadingScreen } from './components/misc'
import { Summary } from './components'
import { usePortfolio, useAPI } from './stores'

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
    color: ${colors.neutral[300]};
`
const StickyNav = styled(Nav)`
    position: absolute;
    bottom: 0;
    width: 100vw;
`

export const App = () => {
    const { getAccounts, addAccount } = usePortfolio()
    const fetchAPIData = useAPI((state) => state.fetchData)

    useEffect(() => {
        fetchAPIData()
    }, [])

    const accounts = getAccounts().map((account) => (
        <div>
            <button onClick={() => account.setName('Mega')}>Change Name</button>
            <div>{account.name}</div>
            <button onClick={() => account.remove()}>Delete</button>
        </div>
    ))

    return (
        <Wrapper>
            <GlobalStyling />
            <LoadingScreen />
            {/* {accounts} */}
            {/* <button onClick={() => addAccount('savings')}>Add Account</button> */}
            <Header />
            <Summary />
            <StickyNav />
        </Wrapper>
    )
}
