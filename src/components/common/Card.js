import React from 'react'
import styled, { css } from 'styled-components'
import {Spinner} from '../common'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.neutral[100]};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
`

const Label = styled.div`
  font-size: ${(props) => props.theme.typeScale.body};
  margin-bottom: -0.25rem;
`

const LabelWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: start;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  margin-right: 2.5rem;
  color: ${(props) => props.theme.colors.neutral[1400]};
`

const Header = styled.div`
  width: 100%;
  min-height: 3.5rem;
  max-height: 3.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.neutral[800]};
  /* background: linear-gradient(90deg, ${props => props.theme.colors.neutral[400]}, ${props => props.theme.colors.neutral[100]}); */
  background: ${props => props.theme.colors.neutral[400]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Message = styled.p`
  color: ${props => props.theme.colors.neutral[1200]};
  ${props => props.error && css`
    color: props.colors.red[100];
  `}
`

export const Card = ({ icon: Icon, label, children, items, message, error, loading=false, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Header>
        <LabelWrapper>
          {Icon && <Icon size="1.25rem" />}
          <Label>{label}</Label>
        </LabelWrapper>
        {items}
      </Header>
      <ContentWrapper>
        {getPlaceholderState() || children}
      </ContentWrapper> 
    </Wrapper>
  )

  function getPlaceholderState () {
    if (loading) return <Spinner/>
    if (error) return <Message error="true">{error}</Message>
    if (message) return <Message>{message}</Message>
  }
}
