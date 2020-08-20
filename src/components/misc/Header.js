import React from 'react'
import styled from 'styled-components'
import {colors, typeScale} from '../../theme'
import {NoveriaLogo} from '../../assets'
import { MdMenu as MenuIcon } from 'react-icons/md'
import { RiMoonFoggyLine as Share } from 'react-icons/ri'

const Wrapper = styled.div`
    /* background: ${colors.blue[100]}; */
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
            <MenuIcon style={{justifySelf: 'start'}} size="2rem"  color={colors.neutral[300]} />
            <NoveriaLogo />
            <Share style={{justifySelf: 'end'}} size="1.5rem"  color={colors.neutral[300]}  />
        </Wrapper>
    )
}