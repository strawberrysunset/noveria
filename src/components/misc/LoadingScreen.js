import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { NoveriaLogo } from '../../assets'
import {colors} from '../../theme'
import {LoadingBar} from './LoadingBar'



const Wrapper = styled.div`
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

export const LoadingScreen = ({ percentage }) => {
    return (
        <Wrapper>
            <NoveriaLogo/>
            <LoadingBar percentage={percentage}/>
        </Wrapper>
    )
}