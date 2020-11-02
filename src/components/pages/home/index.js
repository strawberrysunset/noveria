import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Balance } from './Balance'
import { Markets } from './Markets'
import {Greeting} from './Greeting'
import {PopUp} from '../../common'
import {useSettings, useTheme} from '../../../context'
import {PulldownRebound} from '../../animators'
import { useQueryCache } from 'react-query'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${props => props.theme.colors.neutral[1100]};
  display: grid;
  grid-gap: 1px;
  grid-template-areas: "balance markets";
  grid-template-columns: 50% 50%;
  grid-template-rows: minmax(0, auto);
  ${props => props.theme.isMobile && css`
    /* overflow-y: auto; */
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: "balance";
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
          <Balance css="height: 100%; grid-area: balance;"/>
          <StyledMarkets css="grid-area: markets;"/>
          </PulldownRebound>
        </Wrapper>
     
  )
}
