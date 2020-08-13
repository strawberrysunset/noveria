import React, { useContext }  from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../hooks'
import { NoveriaLogo } from '../assets'

const Wrapper = styled.div`
    
`

export const SideBar = () => {

    const { portfolio } = useContext(GlobalContext);

    return (
        <Wrapper >
            <NoveriaLogo size={}/>
        </Wrapper>
    )
}