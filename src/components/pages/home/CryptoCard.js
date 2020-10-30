import React from 'react'
import styled from 'styled-components/macro'
import {mix} from 'polished'
import {CryptoLogo} from '../../common'

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.neutral[800]};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  max-width: 100%;
  box-shadow: 0.25rem 0.25rem 2rem ${props => props.theme.colors.neutral[400]};
  :hover {
    background-color: ${props => props.theme.colors.neutral[800]};
    box-shadow: 0rem 0rem 2rem ${props => props.theme.colors.neutral[1100]};
    transition: 0.2s;
  }
`

const IconBackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`

const IconBackground = styled.img`
  height: 160%;
  width: auto;
  margin-left: -4vw;
  opacity: 0.05;
`

const Banner = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.neutral[400]};
`

const Label = styled.h3`
  color: ${props => props.theme.colors.neutral[1200]};
  font-size: ${props => props.theme.typeScale.bodySmall};
  margin-top: 0.1rem; 
`

const MainWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  background-color: ${props => {
    if (props.color) {
      return mix(0.9, props.color, props.theme.colors.neutral[600])
    }
    return props.theme.colors.neutral[600]
  }};
`

const Main = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1.5rem;
  font-weight: bold;
  font-size: ${props => props.theme.typeScale.h5};
`

const IconStyle = styled.span`
  color: ${props => props.theme.colors.neutral[1200]};
`
const Divider = styled.p`
  color: ${props => props.theme.colors.neutral[1200]};
`

const StyledCryptoLogo = styled(CryptoLogo)`
  >:first-child{
    width: 1.75rem; height: 1.75rem;
  }
`

export const CryptoCard = ({ label, labelIcon, asset, value, ...rest}) => {

  if (!asset) return null

  const assetContent = asset && (
    <MainWrapper>
      {/* <IconBackgroundContainer>
        <IconBackground src={asset.image}/>
      </IconBackgroundContainer> */}
      <Main color={asset.color}>
        <StyledCryptoLogo name={asset.name} icon={asset.image}></StyledCryptoLogo>
        <Divider>|</Divider>
        {value}
      </Main>
    </MainWrapper>
  )
  
  return (
    <Wrapper { ...rest}>
      <Banner>
        <IconStyle>{labelIcon}</IconStyle>
        <Label>{label}</Label>
      </Banner>
      {assetContent}
    </Wrapper>
  )
}

