import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  max-width: min-content;
  align-items: center;
`

const Option = styled.p`
  font-size: ${(props) => props.theme.typeScale.bodySmall};
  color: ${(props) => {
    return props.selected ? props.theme.colors.neutral[1600] : props.theme.colors.neutral[800]
  }};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.neutral[1200]};
  }
  transition: 0.1s ease;
`

export const OptionsBar = ({ options, ...rest }) => {

  const [selected, setSelected] = React.useState(0)

  return (
    <Wrapper {...rest}>
      {options.map(({value, action}, idx) => (
        <Option selected={selected === idx} onClick={() => {
          setSelected(idx)
          action()
        }}>{value}</Option>
      ))}
  </Wrapper>
  )
}