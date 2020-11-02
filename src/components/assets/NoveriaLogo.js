import React from 'react'
import styled from 'styled-components/macro'
import { MdFilterHdr as Logo } from 'react-icons/md'

const Noveria = styled(Logo)`
  width: 2rem;
  height: 2rem;
  color: ${props => props.theme.colors.neutral[1500]};
`

export const NoveriaLogo = ({...rest}) => {
  return <Noveria {...rest}/>
}
