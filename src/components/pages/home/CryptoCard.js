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

const Percentage = styled.p`
  font-weight: 600;
`

const Value = styled.p`
  font-weight: 600;
`

const Name = styled.h3`
  font-size: ${props => props.theme.typeScale.h5};
  font-weight: bold;
`

const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`

const IconBackground = styled.img`
  height: 160%;
  width: auto;
  position: absolute;
  left: -15%;
  top: -30%;
  opacity: 0.05;
`

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  /* border-bottom:1px solid ${props => props.theme.colors.neutral[800]}; */
  background-color: ${props => props.theme.colors.neutral[400]};
  /* background: linear-gradient(90deg, ${props => props.theme.colors.neutral[800]}, ${props => props.theme.colors.neutral[200]}, ${props => props.theme.colors.neutral[800]}); */
`


const Label = styled.h3`
  color: ${props => props.theme.colors.neutral[1200]};
  font-size: ${props => props.theme.typeScale.bodySmall};
  margin-top: 0.1rem; 
`

const Main = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* align-items: center; */
  justify-content: center;
  gap: 1.5rem;
  position: relative;
  padding: 1.5rem;
  overflow: hidden;
  background-color: ${props => {
    if (props.color) {
      return mix(0.9, props.color, props.theme.colors.neutral[600])
    }
    return props.theme.colors.neutral[600]
  }};
  
  /* background: linear-gradient(90deg, ${props => props.theme.colors.neutral[1100]}, ${props => props.theme.colors.neutral[400]}, ${props => props.theme.colors.neutral[1100]}); */
  flex-grow: 1;
  font-weight: 600;
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

const AssetWrapper = styled.div`
  background-color:${props => props.theme.colors.neutral[400]};
  padding: 2rem;
  border: 1px solid ${props => props.theme.colors.neutral[800]};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`


export const CryptoCard = ({ label, labelIcon, asset, value, ...rest}) => {

  if (!asset) return null

  const assetContent = asset && (
    <>
      <IconBackground src={asset.image}/>
      <StyledCryptoLogo name={asset.name} icon={asset.image}></StyledCryptoLogo>
      <Divider>|</Divider>
      {value}
    </>
  )

  if(asset) console.log(asset.color)
  
  return (
    <Wrapper { ...rest}>
      <Banner>
        <IconStyle>{labelIcon}</IconStyle>
        <Label>{label}</Label>
      </Banner>
      <Main color={asset.color}>
        {/* <AssetWrapper> */}
          {assetContent}
        {/* </AssetWrapper> */}
      </Main>
    </Wrapper>
  )
}

