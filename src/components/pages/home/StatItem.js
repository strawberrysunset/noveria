import React from 'react'
import styled from 'styled-components/macro'
import {useTheme} from '../../../context'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  white-space: nowrap;
  color: ${props => props.theme.colors.neutral[1400]};
`

const Title = styled.p`
  font-weight: 600;
  color: ${props => props.theme.colors.neutral[1200]};
`


export const StatItem = ({ title, icon: Icon, children, ...rest}) => {
  const theme = useTheme()
  return (
      <Wrapper { ...rest}>
        {/* <Icon size="1.25rem" color={theme.colors.neutral[1200]}/> */}
        <Title>{title}</Title>
        {children}
      </Wrapper>
  )
}