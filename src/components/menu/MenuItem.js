import React from 'react'
import styled from 'styled-components/macro'
import { MdChevronRight } from 'react-icons/md'
import {motion} from 'framer-motion'
import {useMenu} from '../../context'

const Wrapper = styled(motion.li)`
  background: ${(props) => props.theme.colors.neutral[200]};
  height: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr auto;
  align-items: center;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 1rem 1.75rem;
  transition: 0.1s ease;
  height: min-content;
  :hover {
    background: ${(props) => props.theme.colors.neutral[200]};
    cursor: pointer;
  }
  font-size: ${(props) => props.theme.typeScale.bodySmall};
  
`
const Left = styled.div`
  margin-bottom: -0.2em;
`

const Right = styled.div`
  color: ${props => props.theme.colors.neutral[800]};
  margin-bottom: -0.2em;
`

const Arrow = styled(MdChevronRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.neutral[800]};
`

export const MenuItem = ({ title, subtitle, subItems, ...rest }) => {

  const {updateMenu} = useMenu()

  return (
    <Wrapper onClick={() => updateMenu({type: 'set_items', items: subItems})} {...rest}>
      <Left>{title}</Left>
      <Right>{subtitle}</Right>
      {subItems && <Arrow/>}
    </Wrapper>
  )
}
