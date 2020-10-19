import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  max-width: min-content;
  align-items: center;
`

const Option = styled.p`
  padding: 0.25rem 0.5rem;
  color: ${(props) => {
    return props.selected ? props.theme.colors.neutral[1600] : props.theme.colors.neutral[1200]
  }};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.neutral[1400]};
  }
  transition: 0.1s ease;
`

export const OptionsBar = ({ children, ...rest }) => {

  // const [selected, setSelected] = useLocalStorageState('history-options', 0)

  return (
    <Wrapper {...rest}>
      {children}
  </Wrapper>
  )
}