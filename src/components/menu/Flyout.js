import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import { useMenu } from './useMenu'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.ul)`
    background-color: ${colors.neutral[300]};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 4;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
`

const NavItem = styled.li`
    padding: 0.5rem 0;
    text-align: center;
    color: ${colors.neutral[300]};
    border-top: 1px solid ${colors.neutral[100]};
    :last-child {
        border-bottom: 1px solid ${colors.neutral[100]};
    }
    text-transform: capitalize;
`

export const Flyout = () => {
    const { showing } = useMenu()
    
    return <> {showing && <Wrapper animate={{ x: [-500, 0] }}/>} </>
}
