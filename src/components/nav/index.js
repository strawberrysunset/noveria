import React from 'react'
import styled from 'styled-components'
import { navItems } from './navItems'
import { NavItem } from './NavItem'
import {colors} from '../../theme'

const Wrapper = styled.div`
    background: ${colors.blue};
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    padding: 1rem 0 ;
    background: ${colors.neutral[300]};
    box-shadow: 0rem +1rem 2rem ${colors.blue[100]};
    border-radius: 1rem 1rem 0 0;
`

const NavItems = navItems.map(({ name, icon }) => {
    return <NavItem title={name} icon={icon} color={colors.blue[100]}/>
})

export const Nav = ({className}) => {

    return (
        <Wrapper className={className}>
            {NavItems}
        </Wrapper>
    )
}