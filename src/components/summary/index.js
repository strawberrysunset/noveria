import React from 'react'
import styled from 'styled-components'
import { Balance } from './Balance'
import { History } from './History'
import { PulldownRebound } from '../../animators'
import { useAPI } from '../../stores'
import Menu from '../menu'

const Wrapper = styled.div``

export const Summary = () => {
    const fetchData = useAPI((state) => state.fetchData)

    return (
        <Wrapper>
            <PulldownRebound action={fetchData}>
                <Balance />
                <Menu.Flyout />
                {/* <Performance/> */}
                <History />
            </PulldownRebound>
        </Wrapper>
    )
}
