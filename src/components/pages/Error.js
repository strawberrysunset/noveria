import React from 'react'
import styled from 'styled-components/macro'
import {Link} from '../common'
import {RiErrorWarningFill as WarningIcon} from 'react-icons/ri'


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`
const Title = styled.h1`
  margin: 2rem 0;

  font-size: ${props => props.theme.typeScale.h4};
`

const SubTitle = styled(Link)`
  color: ${props => props.theme.colors.neutral[1200]};
`

const Icon = styled(WarningIcon)`
  height: 3rem;
  width: 3rem;
  font-size: ${props => props.theme.colors.neutral[1400]};
`

export const Error = () => {
  return (
    <Wrapper>
      <Icon/>
      <Title>Uh oh. Looks like you've stumbled upon a non-existent page.</Title>
      <SubTitle to="/">Go Home</SubTitle>
    </Wrapper>
  )
}