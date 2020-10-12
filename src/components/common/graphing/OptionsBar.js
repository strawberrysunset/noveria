import React from 'react'
import styled from 'styled-components'
import {useLocalStorageState} from '../../../hooks/misc'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  max-width: min-content;
  align-items: center;
`

const Option = styled.p`
  padding: 0.25rem 0.5rem;
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

  const [selected, setSelected] = useLocalStorageState('history-options', 0)

  return (
    <Wrapper {...rest}>
      {options.map(({value, action}, idx) => (
        <Option key={idx} selected={selected === idx} onClick={() => {
          setSelected(idx)
          action()
        }}>{value}</Option>
      ))}
  </Wrapper>
  )
}