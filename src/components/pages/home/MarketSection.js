import React from 'react'
import styled from 'styled-components' 

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
` 

const TitleWrapper = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.neutral[800]};
  /* border-left: 1px solid ${(props) => props.theme.colors.neutral[800]}; */
  background: ${(props) => props.theme.colors.neutral[800]};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Title = styled.p`
  margin-bottom: -0.2rem;
  border-right: 1px solid ${(props) => props.theme.colors.neutral[300]};
  white-space: nowrap;
`

const Content = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  background: linear-gradient(90deg, ${(props) => props.theme.colors.neutral[300]}, ${(props) => props.theme.colors.neutral[100]});
`

export const MarketSection = ({icon, title, children}) => { 

    const Icon = icon;
    return (
        <Wrapper>
            <TitleWrapper>
                <Icon size="1rem"/>
                <Title>{title}</Title>
            </TitleWrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}