import React from 'react'
import styled from 'styled-components'
import { colors, typeScale } from '../../theme'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    font-size: ${typeScale.bodySmall};
    margin-top: 0.25rem;
`

export const NavItem = ({ title, icon: Icon, color }) => {
    return (
        <Wrapper>
            <Icon size="1.5rem" color={color} />
            {/* <Title>{title}</Title> */}
        </Wrapper>
    )
}
