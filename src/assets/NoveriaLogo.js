import React from 'react'
import styled from 'styled-components'
import { MdTerrain as Noveria } from 'react-icons/md'
import { colors } from '../theme'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.neutral[300]};
`

export const NoveriaLogo = ({ style }) => {
    return (
        <Wrapper style={style}>
            <Noveria size="2rem" color={colors.neutral[300]} />
        </Wrapper>
    )
}
