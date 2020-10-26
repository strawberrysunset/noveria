import React from 'react'
import styled, { css } from 'styled-components/macro'
import {Spinner} from '../common'
import {transparentize} from 'polished'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.neutral[100]};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
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
  padding: 0.25rem 1.5rem;
  border-top: 0.5rem solid ${props => props.theme.colors.neutral[1100]};
  border-bottom: 1px solid ${props => props.theme.colors.neutral[1100]};
  /* background: linear-gradient(90deg, ${props => props.theme.colors.neutral[400]}, ${props => props.theme.colors.neutral[100]}); */
  background: ${props => props.theme.colors.neutral[800]};
  display: flex;

  align-items: center;
  justify-content: space-between;
`

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 3.5rem);
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`

const Message = styled.p`
  color: ${props => props.theme.colors.neutral[1200]};
  ${props => props.error && css`
    color: props.colors.red[100];
  `}
  text-align: center;
`

const PlaceHolderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${props => props.transparentBackground 
  ? css`
    background-color: ${props => transparentize(0.1, props.theme.colors.neutral[100])};
  `
  : css`
    background-color: ${props => props.theme.colors.neutral[100]};
  `}
  
  z-index: 2;
  padding: 2.5rem;
  
`

export const Card = ({ children, icon: Icon, transparentBackground=false, label, render, items, message, isLoading, error, ...rest }) => {

  const placeholderState = getPlaceholderState();

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
        {placeholderState && <PlaceHolderWrapper transparentBackground={transparentBackground}>{placeholderState}</PlaceHolderWrapper>}
        {children}
      </ContentWrapper> 
    </Wrapper>
  )

  function getPlaceholderState () {
    if (isLoading) return <Spinner/>
    if (error) return <Message error="true">{error}</Message>
    if (message) return <Message>{message}</Message>
  }
}
