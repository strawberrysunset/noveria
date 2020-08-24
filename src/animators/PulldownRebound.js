import React from 'react'
import { motion, useTransform, useMotionValue } from 'framer-motion'
import styled from 'styled-components'
import { colors } from '../theme'

const Wrapper = styled.div``

const Light = styled(motion.div)`
    height: 1rem;
    background: radial-gradient(
        ellipse at top,
        ${colors.blue[300]},
        30%,
        rgba(0, 0, 0, 0),
        90%,
        rgba(0, 0, 0, 0)
    );
    opacity: ${(props) => props.opacity};
`

export const PulldownRebound = ({ action, children }) => {
    const y = useMotionValue(0) // Create source value
    const opacity = useTransform(y, [0, 80], [0, 1]) // Map source value range to opacity range.

    const options = {
        onDragEnd: (_, info) => {
            if (info.offset.y > 150) action()
        },
        drag: 'y',
        style: { y },
        // Always rebounds to within constraints, therefore will rebound back to origin.
        dragConstraints: { bottom: 0, top: 0 },
        dragElastic: 0.2,
        // Custom transition that fires after drag is released.
        dragTransition: { bounceStiffness: 600 },
    }

    return (
        <Wrapper>
            <Light style={{ opacity }} />
            <motion.div {...options}>{children}</motion.div>
        </Wrapper>
    )
}
