import React from 'react'
import styled from 'styled-components'
import { colors, typeScale } from '../../theme'

const Wrapper = styled.div`
    border-top: 1px solid ${colors.neutral[100]};
    border-bottom: 1px solid ${colors.neutral[100]};
`

const Label = styled.h3`
    color: ${colors.neutral[300]};
    font-size: ${typeScale.h5};
`

const Header = styled.div`
    display: flex;
    padding: 1rem;
`

export const Card = ({ label, children }) => {
    return (
        <Wrapper>
            <Header>
                <Label>{label}</Label>
            </Header>
            {children}
        </Wrapper>
    )
}
