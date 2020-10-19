import React from 'react'
import styled, {css} from 'styled-components/macro'

const Wrapper = styled.p`
  color: ${props => props.theme.colors.neutral[1400]};
  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutral[1200]};
  }
  ${props => !props.theme.isMobile && css`
    display: none;
  `}
`

export const ShowHideToggle = ({showing, setShowing, ...rest}) => {
    return (
        <Wrapper onClick={() => setShowing(!showing)} { ...rest}>
          {showing ? 'Hide' : 'Show'}
        </Wrapper>
    )
}