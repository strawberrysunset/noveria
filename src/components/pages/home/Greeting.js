import React from 'react'
import styled from 'styled-components/macro'
import { NoveriaLogo } from '../../assets'

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
  color: ${props => props.theme.colors.neutral[1300]};
`

const title = 'Hi there and welcome to Noveria'
const subtitle = 'Noveria is an account-less cryptocurrency portfolio tracker that runs in your browser. It provides you with statistics obout your portfolio, market information and more. Enjoy!'

export const Greeting = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <NoveriaLogo />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}
