import React from 'react'
import styled from 'styled-components'
import { colors, typeScale } from '../../theme'
import { NoveriaLogo } from '../../assets'
import Menu from '../menu'
import { MdMenu as MenuIcon } from 'react-icons/md'
import { RiMoonFoggyLine as DarkModeButton } from 'react-icons/ri'

const Wrapper = styled.header`
    background: ${colors.blue[100]};
    border-bottom: 1px solid ${colors.neutral[100]};
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    align-items: center;
    padding: 0.75rem 1rem;
`

const Page = styled.p`
    font-size: ${typeScale.bodySmall};
    color: ${colors.neutral[200]};
`

export const Header = () => {
    return (
        <Wrapper>
            <Menu.Button />
            <NoveriaLogo />
            <DarkModeButton
                style={{ justifySelf: 'end' }}
                size="1.5rem"
                color={colors.neutral[300]}
            />
        </Wrapper>
    )
}
