import React from 'react'
import styled from 'styled-components/macro'
import {CoinGeckoLogo, NoveriaLogo} from '../../assets'

const Wrapper = styled.div`
  /* padding: 2rem 0; */
  display: grid;
  align-items: center;
  grid-gap: 0.5rem;
  /* grid-auto-flow: column; */
  justify-content: center;
  font-weight: 600;
`

const Text = styled.div`
  font-size: 0.8rem;
`

const Logo = styled(CoinGeckoLogo)`
  height: 2.25rem;
  margin-top: 0.3rem;
`

const LogoWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  /* flex-direction: column; */
  grid-gap: 1px;
  background-color: ${props => props.theme.colors.neutral[300]};
  align-items: stretch;
  > * {
    padding: 0.25rem 1rem;
    background-color: ${props => props.theme.colors.neutral[100]};
  }
`

const NoveriaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Poweredby = styled.p`
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color:  ${props => props.theme.colors.neutral[1200]};
`

export const Attribution = ({ ...rest }) => {

  return (
    <Wrapper {...rest}>
      {/* <NoveriaWrapper>
        <NoveriaLogo/>
        
      </NoveriaWrapper> */}
      <Poweredby>Noveria is Powered by</Poweredby>
      <LogoWrapper>
        <Logo />
        <Text>CoinTelegraph</Text>
      </LogoWrapper>
    </Wrapper>
  )
}
