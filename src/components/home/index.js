import React from 'react'
import styled from 'styled-components'
import { Markets } from '../home'

const Wrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-areas: 
        "markets markets"
        "portfolio assets"
        "portfolio history";
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 3rem 1fr 1fr;
`

const Markets = styled(Markets)`
    grid-area: markets;
`

const Portfolio = styled(Markets)`
    grid-area: portfolio;
`

const Assets = styled(Assets)`
    grid-area: assets;
`

const History = styled(History)`
    grid-area: history;
`

export const Home = () => {
    return (
        <Wrapper>
            <Markets/>
            <Portfolio/>
            <Assets/>
            <History/>
        </Wrapper>
    )
}