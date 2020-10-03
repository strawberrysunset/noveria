import React from 'react'
import styled from 'styled-components/macro'
import { NoveriaLogo } from '../../../assets'

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 0.5rem;
  padding: 1.5rem 2.25rem;
  padding-bottom: 2.75rem;
`
const Title = styled.h2`
 
  font-size: ${(props) => props.theme.typeScale.h4};
  font-weight: 700;
`
const Subtitle = styled.p`
 
  font-size: ${(props) => props.theme.typeScale.bodySmall};
`

export const Greeting = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <NoveriaLogo />
      <Title>Welcome to Noveria.</Title>
      <Subtitle>
        An accountless client-side cryptocurrency portfolio tracker. Enter your
        assets to start tracking your cryptocurrency portfolio.
      </Subtitle>
    </Wrapper>
  )
}
