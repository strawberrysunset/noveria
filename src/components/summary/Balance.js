import React from 'react'
import styled from 'styled-components'
// import {usePortfolio} from '../../stores'
import {colors, typeScale} from '../../theme'
import { MdKeyboardArrowDown as ArrowIcon } from 'react-icons/md'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 1rem;
`

const Arrow = styled(ArrowIcon)`
    transform: ${props => {
        if (props.right) return `rotate(-90deg)`
        if (props.left) return `rotate(90deg)`
    }};
`


const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color : ${colors.neutral[300]};
    
`

const Account = styled.p`
    text-transform: uppercase;
    font-size: ${typeScale.bodySmall};
    margin-bottom: 0.25rem;
`

const Total = styled.div`
    font-size: ${typeScale.h2};
    font-weight: 900;
    letter-spacing: -0.03em;
`

const AltTotal = styled.div`
    font-size: ${typeScale.bodySmall};
    color : ${colors.neutral[100]};
`

export const Balance = () => {

    // const {activeAccount: {name, total}} = usePortfolio();

    return (
        <Wrapper>
            <Arrow left size="1.5rem" color={colors.neutral[300]}/>
            <Main>
                <Account>Savings</Account>
                <Total>$2,130,120</Total>
                <AltTotal>(0.25 BTC)</AltTotal>
            </Main>
            <Arrow right size="1.5rem" color={colors.neutral[300]}/>
        </Wrapper>
    )
}