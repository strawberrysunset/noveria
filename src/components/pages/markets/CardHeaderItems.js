import React from 'react'
import styled, {css} from 'styled-components/macro'
import { useGlobalData } from '../../../hooks/api'
import {Input} from '../../common'
import {useFormatPrice} from '../../../hooks/common'

const Wrapper = styled.div`
  display: flex;
 
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  max-height: 100%;
  margin-top: 0.4rem;
`
const Item = styled.li`
  color: ${props => props.theme.colors.neutral[1200]};
  /* font-size: ${props => props.theme.typeScale.body}; */
  vertical-align: middle;
  
`

const Right = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
  margin-left: auto;
`

const NavButton = styled.p`
  ${props => {
    return !props.enabled && css`
      color: ${props.theme.colors.neutral[1600]};
      cursor: none;
      pointer-events: none;
    `
  }}
  :hover{
    cursor: pointer;
  }
`

export const CardHeaderItems = ({page, setPage, totalPages}) => {

  return (
    <Wrapper>
      <Right>
        {/* <NavButton enabled={page > 1} onClick={()=> setPage(1)}>First</NavButton> */}
        <NavButton enabled={page > 0} onClick={()=> setPage(page - 1)}>Previous</NavButton>
        <Item css={`font-weight: bold;`}>{page + 1}</Item>
        <NavButton enabled={page < totalPages - 1} onClick={()=> setPage(page + 1)}>Next</NavButton>
      </Right>
    </Wrapper> 
  )
}