import React from 'react'
import styled from 'styled-components/macro'
import { IoMdCloudyNight as DarkModeIcon } from 'react-icons/io'

const Icon = styled(DarkModeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutral[800]};
  }
`

export const DarkModeButton = ({ ...rest }) => {
  return <Icon {...rest} />
}
