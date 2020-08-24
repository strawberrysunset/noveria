import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import { motion, useSpring } from 'framer-motion'

const Bar = styled(motion.div)`
    background: ${colors.neutral[300]};
    height: 0.25rem;
    width: 3rem;
`

export const LoadingBar = ({ percentage }) => {
    const width = useSpring(percentage, { stiffness: 300 })

    useEffect(() => {
        width.set(percentage / 2)
    }, [percentage])

    return <Bar style={{ width }} />
}
