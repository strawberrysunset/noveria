import React from 'react'
import styled, {css} from 'styled-components'
import { AssetTable } from './AssetTable'
import { AssetManager } from './AssetManager'
import {AiFillPlusSquare} from 'react-icons/ai'
import {PopUp} from '../../common'
import {useTheme} from '../../../context'

const Wrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.neutral[300]};
  display: grid;
  grid-gap: 1px;
  background: ${props => props.theme.colors.neutral[800]};
  grid-template-columns: 1fr 2fr;
  grid-auto-flow: column;
  width: 100%;
  flex-grow: 1;
  
  ${props => props.theme.isMobile && css`
    grid-auto-flow: row;
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
    /* height: 100%; */
    overflow-y: auto;
  `}
`

const AddAsset = styled(AiFillPlusSquare)`
  position: absolute;
  top: 1rem;
  left: calc(50% - 1rem);
  ${props => !props.theme.isMobile && css`
    display: none;
  `};
  height: 2rem;
  width: 2rem;
  :hover {
    cursor: pointer;
  }
  color: ${props => props.theme.colors.neutral[1400]};
`
const StyledAssetManager = styled(AssetManager)`
  /* ${props => props.theme.isMobile && css`
    display: none;
  `} */
  overflow-y: auto;
`

const StyledPopUp = styled(PopUp)`
  ${props => !props.theme.isMobile && css`
    display: none;
  `};
`

export const Portfolio = () => {
  const theme = useTheme()
  const [showing, setShowing] = React.useState(false);
  return (
    <Wrapper>
      {theme.isMobile ? (
        <StyledPopUp showClose={false} showing={showing}>
          {() => (
            <StyledAssetManager handleClose={() => setShowing(false)}/>
          )}
        </StyledPopUp>
        ) : (
          <StyledAssetManager/>
        )}
      <AssetTable showPopUp={() => setShowing(true)} css="overflow-y: auto;"/>
    </Wrapper>
  )
}
