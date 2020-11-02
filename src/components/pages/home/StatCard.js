import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Line} from '../../common'
import {useTheme} from '../../../context'
import {mix} from 'polished'
import {formatPercentage} from 'utilities'

const Wrapper = styled.div`
  border: 1px solid ${props => props.color ? mix(0.2, props.color, props.theme.colors.neutral[1100]) : props.theme.colors.neutral[1100] };
  height: 6rem;
  position: relative;
  padding: 1rem;
  background-color: ${props => props.theme.colors.neutral[1000]};
  box-shadow: 0 0 1rem ${props => props.theme.colors.neutral[1100]} inset, 0.5rem 0.5rem 1rem ${props => props.theme.colors.neutral[400]};
  :hover {
    box-shadow: 0 0 1rem ${props => props.theme.colors.neutral[1100]} inset, 0.5rem 0.5rem 1rem ${props => props.theme.colors.neutral[800]};
    transition: 0.2s;
  }
`

const Logo = styled.img`
  height: 2rem;
`

const Name = styled.p`
  font-size: ${props => props.theme.typeScale.body};
`

const Value = styled.p`
  color: ${props => props.theme.colors.neutral[1200]};
  font-size: ${props => props.theme.typeScale.body};
  font-weight: 600;
`

const Label = styled.p`
  text-transform: uppercase;
  font-size: ${props => props.theme.typeScale.caption};
  letter-spacing: 0.05em;
  color: ${props => props.theme.colors.neutral[1400]};
`

const Main = styled.div`
  display: grid;
  grid-gap:0.75rem;
  max-width: min-content;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  white-space: nowrap;
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* background: ${props => props.theme.colors.neutral[900]}; */
`
const Symbol = styled.p`
  color: ${props => props.theme.colors.neutral[1200]};
  text-transform: uppercase;
`
const PlaceHolder = styled.p`
  white-space: nowrap;
  margin-top: 0.5rem;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.neutral[1300]};
`

export const StatCard = ({ asset, disabled, label, value, ...rest}) => {
    return (
        <Wrapper color={asset ? asset.color : undefined} { ...rest}>
          <Header>
           <Label>{label}</Label>
           <Value >{value}</Value>
          </Header>
          <Main>
            {(disabled && !asset) ? (
              <PlaceHolder>
                Portfolio Is Empty
              </PlaceHolder>
            ) : (
              <>
                <Logo src={asset.image}/>
                <Name>{asset.name}</Name>
                <Symbol>{asset.symbol}</Symbol>
                <Value>{asset.value}</Value>
              </>
            )}
          </Main>
        </Wrapper>
    )
}