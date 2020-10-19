import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
`

export const DonationPopUp = ({ ...rest}) => {
    return (
        <Wrapper { ...rest}>>
        </Wrapper>
    )
}