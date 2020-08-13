import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../hooks'
import { colors } from '../theme'
import { MdPieChart as PortfolioIcon } from 'react-icons/md'
import { CardHeader } from '../../components'

const PortfolioCard = styled(Card)`
    padding: 1rem;
`

const Total = styled.div`
    padding: 1rem;
    background-color: ${colors.blue[100]};
`

export const Portfolio = () => {

    const { portfolio, api } = useContext(GlobalContext);

    const assets = portfolio.map(asset => <Asset {...asset}/>);

    return (
        <PortfolioCard title="Portfolio" Icon={PortfolioIcon}>
            <CardHeader/>
            <RefreshButton onClick={api.refresh}>Refresh</RefreshButton>
            <Total>{portfolio.total}</Total>
            {assets}
        </PortfolioCard>
    )
}