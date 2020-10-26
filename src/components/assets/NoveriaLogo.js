import React from 'react'
import styled from 'styled-components/macro'
import { MdFilterHdr as Logo } from 'react-icons/md'
// import {GiAbstract060 as Logo} from 'react-icons/gi'
import {
  GiDiplodocus as Dino,
  GiEclipse as Arrow,
  GiDrinkMe as Dr,
} from 'react-icons/gi'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;;
`

const Noveria = styled(Logo)`
  width: 2rem;
  height: 2rem;
  color: ${props => props.theme.colors.neutral[1500]};
`

export const NoveriaLogo = ({...props}) => {
  return (
    <Wrapper {...props}>
      <Noveria />
    </Wrapper>
  )
}
