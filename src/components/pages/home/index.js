import React from 'react'
import styled from 'styled-components/macro'
import { Balance } from './Balance'
import { History } from './History'
import { Breakdown } from './Breakdown'
import { PulldownRebound } from '../../animators'
import { MarketBar } from './MarketBar'
import {useNotification} from '../../../hooks/notification'
import {Greeting} from './Greeting'


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 1px;
  /* align-items: stretch; */

  grid-template-columns: 1fr;
  grid-template-areas:
    'markets'
    'balance'
    'history'
    'breakdown';

  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 3fr 5fr;
    grid-template-areas:
      'markets markets'
      'balance history'
      'breakdown breakdown';
  }

  background: ${(props) => props.theme.colors.neutral[300]};
  > * {
    background: ${(props) => props.theme.colors.neutral[100]};
  }
`

// const Rebounder = styled(PulldownRebound)``
export const Home = () => {

  // const {notification} = useNotification()

  // React.useEffect(() => {
  //   dispatch({type: 'showPopUp', content: <Greeting/>})
  // }, [])

  return (
    <Wrapper>
      {/* </Rebounder> */}
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
