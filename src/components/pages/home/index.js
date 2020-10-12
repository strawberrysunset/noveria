import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Balance } from './Balance'
import { History } from './History'
import { Breakdown } from './Breakdown'
import { PulldownRebound } from '../../animators'
import { MarketBar } from './MarketBar'
import {useNotification} from '../../../hooks/notification'
import {PopUp} from '../../misc'


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 3fr 3fr;
  grid-template-areas:
      'markets markets'
      'balance history'
      'balance breakdown';

  ${props => props.theme.isMobile && css`
    overflow: hidden; 
    overflow-y: auto;
    grid-gap: 1px;
    grid-template-columns: 1fr;
    grid-template-areas:
      'balance'
      'history'
      'breakdown';
  `}
  
  background: ${(props) => props.theme.colors.neutral[300]};
`

export const Home = () => {

  return (
    <Wrapper>
      <MarketBar
        css={`
          grid-area: markets;
        `}
      />
      <Balance css={`grid-area: balance;`}/>
      <Breakdown css={`grid-area: breakdown;`}/>
      <History css={`grid-area: history;`}/>
    </Wrapper>
  )
}
