import React from 'react'
import styled from 'styled-components/macro'
import { BiLeftArrowAlt as Arrow } from 'react-icons/bi'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;
  padding: 4rem;
  text-align: center;
  justify-content: center;
`

const Icon = styled(Arrow)`
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
`

const Text = styled.p`
  color: ${(props) => props.theme.colors.neutral[1000]};
`

export const CoinTablePlaceholder = (props) => {
  return (
    <Wrapper {...props}>
      {/* <Icon/> */}
      <Text>Add coins to begin tracking your portfolio.</Text>
    </Wrapper>
  )
}
