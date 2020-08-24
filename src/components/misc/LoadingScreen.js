import React from 'react'
import styled from 'styled-components'
import { NoveriaLogo } from '../../assets'
import { colors } from '../../theme'
import { LoadingBar } from './LoadingBar'
import { motion, AnimatePresence } from 'framer-motion'
import { useAPI } from '../../stores'

const Wrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: ${colors.blue[100]};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const LoadingScreen = () => {
    const api = useAPI()

    return (
        <AnimatePresence>
            {api.initialLoad && (
                <Wrapper
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <NoveriaLogo />
                    <LoadingBar percentage={api.fetching.percentage} />
                </Wrapper>
            )}
        </AnimatePresence>
    )
}
