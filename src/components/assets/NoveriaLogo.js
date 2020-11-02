import React from 'react'
import styled from 'styled-components/macro'
import { 
  MdFilterHdr as Logo 
} from 'react-icons/md'
// import {GiAbstract060 as Logo} from 'react-icons/gi'
import {
  // GiDiplodocus as Logo,
  // GiEclipse as Logo,
  // GiDrinkMe as Logo,
} from 'react-icons/gi'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  
`

const Noveria = styled(Logo)`
  height: 100%;
  width: 100%;
  color: ${props => props.theme.colors.neutral[1500]};
`

export const NoveriaLogo = ({...rest}) => {
  return (
    <Wrapper {...rest}>
      <Noveria />
    </Wrapper>
  )
}
