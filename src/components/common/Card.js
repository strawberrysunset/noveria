import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Card = ({ children, Icon, title, ExtraHeaderItems }) => {
    return (
        <Wrapper>
            <CardHeader>
                <>
                    <Icon size="1.5rem" color={colors.blue[100]}/>
                    <Title>{title}</Title>
                </>
                <ExtraHeaderItems/>
            </CardHeader>
            {children}
        </Wrapper>
    )
}
