import React from 'react'
import styled from 'styled-components/macro'
import {mix} from 'polished'

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.neutral[1100]};
  padding: 1rem;
  overflow: hidden;
  position: relative;
  
  background-color: ${props => {
    if (props.color) {
      return mix(0.5, props.color, props.theme.colors.neutral[400])
    }
    return props.theme.colors.neutral[400]
  }};

  :hover {
    background-color: ${props => props.theme.colors.neutral[600]};
    box-shadow: 0rem 0rem 2rem ${props => props.theme.colors.neutral[800]};
    transition: 0.2s;
  }
`
const Title = styled.h3`
  color: ${props => props.theme.colors.neutral[1200]};
  font-size: ${props => props.theme.typeScale.bodySmall};
  margin-bottom: 0.5rem;
`

const ContentWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  /* justify-content: center; */
  /* background: ${props => props.theme.colors.neutral[900]};
  padding: 0.8rem 1rem;
  border-radius: 0.125rem; */
`

export const StatCard = ({ title, children, color, ...rest}) => {
    return (
        <Wrapper color={color} { ...rest}>
          <Title>{title}</Title>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </Wrapper>
    )
}