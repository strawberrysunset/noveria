import React from 'react'
import styled from 'styled-components/macro'
import { NoveriaLogo } from '../../assets'
import {Button} from '../../common'

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 0.25rem;
  padding: 2rem 2.25rem;
  /* padding-bottom: 2.25rem;
  padding-top: 2rem; */
`
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`
const Subtitle = styled.p`
  line-height: 1.7;
  font-size: ${(props) => props.theme.typeScale.body};
  color: ${props => props.theme.colors.neutral[1300]};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

const title = 'Welcome to Noveria'
const subtitle = 'Noveria is an account-less cryptocurrency portfolio tracker that runs in your browser. It provides you with statistics about your portfolio, market information and more. Enjoy!'

export const Greeting = ({ handleClose, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <NoveriaLogo css="width: 3rem; height: 3rem; margin: 0 auto;"/>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button onClick={handleClose}>Dismiss</Button>
    </Wrapper>
  )
}
