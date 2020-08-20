import React, {useState, useEffect} from 'react'
import styled, {css, keyframes} from 'styled-components'
import {colors} from '../../theme'
import {motion, useMotionValue} from 'framer-motion'

const Bar = styled(motion.div)`
    transform: ${props => css`scaleX(${props.percentage}%)`};
    background: ${colors.neutral[300]};
    height: 0.25rem;
    width: 3rem;
`

export const LoadingBar = ({ percentage : target }) => {

    const percentage = useMotionValue(0);

    return (
        <Bar percentage={{percentage}}/>
    )
}