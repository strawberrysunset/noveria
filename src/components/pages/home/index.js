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
  grid-gap: 1px;
  background: ${props => props.theme.colors.neutral[800]};
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 45% 55%;
  grid-template-areas:
      /* 'markets markets' */
      'balance markets'
      'balance history';

  ${props => props.theme.isMobile && css`
    overflow: hidden; 
    overflow-y: auto;
    grid-gap: 1px;
    grid-template-columns: 1fr;
    grid-template-areas:
      'balance'
      'markets'
      'history';
  `}
`

export const Home = () => {

  return (
    <Wrapper>
      {/* <MarketBar
        css={`
          grid-area: markets;
        `}
      /> */}
      <Balance css="grid-area: balance;"/>
      <Breakdown css="grid-area: markets;"/>
      <History css="grid-area: history;"/>
    </Wrapper>
  )
}
