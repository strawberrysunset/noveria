import React from 'react'
import styled from 'styled-components'
import {useCustomState} from '../../../hooks/misc'

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  max-width: min-content;
  align-items: center;
  grid-gap: 0.75rem;
  transition: 0.15s;
`
export const OptionsBar = ({ render = () => null, ...rest }) => {

  const [selected, setSelected] = useCustomState({
    initialState : 0,
    saveToLocalStorage: {
      isEnabled: true,
      key: 'options-bar-history'
    }
  })

  return (
    <Wrapper {...rest}>
      {render({selected, setSelected})}
    </Wrapper>
  )
}