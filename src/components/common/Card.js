import React from 'react'
import styled, { css } from 'styled-components'


const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.neutral[100]};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

const Label = styled.div`
  font-size: ${(props) => props.theme.typeScale.h5};
  margin-bottom: -0.25rem;
`

const LabelWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: start;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  margin-right: 2.5rem;
`

const Header = styled.div`
  width: 100%;
  min-height: 3.5rem;
  max-height: 3.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: -1px;
  background: linear-gradient(90deg, ${props => props.theme.colors.neutral[400]}, 5%, ${props => props.theme.colors.neutral[200]});
  /* background: ${props => props.theme.colors.neutral[200]}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: static;
`

const ContentWrapper = styled.div`
  flex-grow: 1;
`

export const Card = ({ icon: Icon, label, children, items, ...rest }) => {
  return (
    <Wrapper {...rest} >
      <Header>
        <LabelWrapper>
          {Icon && <Icon size="1.25rem" />}
          <Label>{label}</Label>
        </LabelWrapper>
        {items}
      </Header>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Wrapper>
  )
}
