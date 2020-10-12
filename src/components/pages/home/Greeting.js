import React from 'react'
import styled from 'styled-components/macro'
import { NoveriaLogo } from '../../../assets'

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 0.5rem;
  padding: 1.5rem 2.25rem;
  padding-bottom: 2.25rem;
`
const Title = styled.h2`
  font-size: ${(props) => props.theme.typeScale.h4};
  font-weight: 700;
`
const Subtitle = styled.p`
  line-height: 1.7;
  font-size: ${(props) => props.theme.typeScale.body};
`

const title = 'Welcome to Noveria.'
const subtitle = 'Noveria is an accountless cryptocurrency portfolio tracker that runs in your browser. Get started by adding assets to your portfolio.'

export const Greeting = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <NoveriaLogo />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}
