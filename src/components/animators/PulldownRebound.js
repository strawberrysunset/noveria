import React from 'react'
import { motion, useTransform, useMotionValue } from 'framer-motion'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  position: relative;
  display: contents;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.neutral[200]};
`

const Text = styled.p`
  position: absolute;
  top: 1.5rem;
  color: ${props => props.theme.colors.neutral[1200]};
  text-transform: uppercase;
  font-size: ${props => props.theme.typeScale.bodySmall};
  letter-spacing: 0.05em;
  width: 100%;
  text-align: center;
  opacity: ${(props) => props.opacity};
`

const Light = styled(motion.div)`
  position: absolute;
  
  width: 100%;
  z-index: 1000;
  top: 0;
  height: 1rem;
  background: radial-gradient(
    ellipse at top,
    ${props => props.theme.colors.neutral[1300]},
    20%,
    transparent,
    100%,
    transparent
  );
  opacity: ${(props) => props.opacity};
`

export const PulldownRebound = ({ disabled, action = () => {}, children, ...rest }) => {
  const y = useMotionValue(0) // Create source value
  const opacity = useTransform(y, [0, 20], [0, 1]) // Map source value range to opacity range.

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

  if (disabled) return <Wrapper {...rest}>{children}</Wrapper>

  return (
    <Wrapper {...rest}>
        <Light style={{ opacity }} />
        <Text style={{opacity }}>Refresh</Text>
        <motion.div {...options}>{children}</motion.div>
    </Wrapper>
  )
}
