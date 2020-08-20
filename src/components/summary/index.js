import React from 'react'
import styled from 'styled-components'
import { Balance } from './Balance'
// import {History} from './History'
// import {Performance} from './Performance'
import {Card} from '../common'
import { PulldownRebound } from '../../animators';
import {useAPI} from '../../stores'

const Wrapper = styled.div`
    

`

export const Summary = () => {

    const api = useAPI();
    return (
        <Wrapper>
            <PulldownRebound action={api.refresh} >
                <Balance/>
                {/* <Card label="History"/> */}
                {/* <Performance/>
                <History/> */}
            </PulldownRebound>
        </Wrapper>
    )
}