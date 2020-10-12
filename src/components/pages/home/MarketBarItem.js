import React from 'react'
import styled from 'styled-components' 

const Wrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
` 

const Left = styled.p`
    color: ${(props) => props.theme.colors.neutral[1000]};
`

const Right = styled.p`

`

export const MarketBarItem = ({left, right}) => { 
    return (
        <Wrapper>
            <Left>{left}</Left>
            <Right>{right}</Right>
        </Wrapper>
    )
}