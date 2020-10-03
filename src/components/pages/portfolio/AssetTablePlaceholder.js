import React from 'react'
import styled, {css} from 'styled-components/macro'
import { BiLeftArrowAlt as Arrow } from 'react-icons/bi'

const Wrapper = styled.div`
  /* height: 100%; */
  width: 100%;

  display: flex;
  padding: 4rem;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.neutral[1000]};
  text-align: center;
`

const Icon = styled(Arrow)`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
  ${(props => props.theme.isMobile && css`display: none;`)};
`

const Text = styled.p`
  margin-top: 0.3rem;
`

export const AssetTablePlaceholder = ({...rest}) => {
  return (
    <Wrapper {...rest}>
      <Icon/>
      <Text>Add assets to begin tracking your portfolio.</Text>
    </Wrapper>
  )
}
