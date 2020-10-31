import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Balance } from './Balance'
import { Statistics } from './Statistics'
import { Markets } from './Markets'
import {Greeting} from './Greeting'
import {PopUp} from '../../common'
import {useSettings, useTheme} from '../../../context'
import {PulldownRebound} from '../../animators'
import { useQueryCache } from 'react-query'

const Wrapper = styled.div`
  max-height: 100%;
  width: 100%;
  flex-grow: 1;
  display: grid;
  grid-gap: 1px;
  background: ${props => props.theme.colors.neutral[1100]};
  grid-template-columns: 50% 50%;
  grid-template-rows: 42% 58%;
  grid-template-areas:
      'balance markets'
      'statistics markets';

  ${props => props.theme.isMobile && css`
    overflow: hidden; 
    overflow-y: auto;
    grid-gap: 1px;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'balance'
      'statistics';
  `}
`

const StyledMarkets = styled(Markets)`
  ${props => props.theme.isMobile && css`
    display: none;
  `}
`


export const Home = ({...rest}) => {

  const {firstVisit, updateSettings} = useSettings()
  const theme = useTheme()
  const queryCache = useQueryCache()

  return (
      
        <Wrapper {...rest}>
          <PulldownRebound action={() => queryCache.refetchQueries('coinData')} disabled={!theme.isMobile}>
            {firstVisit && (
              <PopUp showClose={false}>
                {({setShowing}) => (
                  <Greeting handleClose={() => {
                    setShowing(false)
                    updateSettings({type: 'set_firstVisit', firstVisit: false})
                  }}/>
                )}
              </PopUp>
            )}
            <Balance css="grid-area: balance;"/>
            <StyledMarkets css="grid-area: markets;"/>
            <Statistics css="grid-area: statistics;"/>
          </PulldownRebound>
        </Wrapper>
      
   
  )
}
