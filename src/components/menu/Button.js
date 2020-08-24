import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
import { MdDehaze as HamburgerIcon, MdArrowBack as Back } from 'react-icons/md'
import { useMenu } from './useMenu'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: min-content;
`

const BackIcon = styled(Back)`
    z-index: 5;
`
const iconStyles = { size: '1.75rem', color: colors.neutral[300] }

export const Button = () => {
    const { showing, toggle } = useMenu()

    return (
        <Wrapper onClick={toggle}>
            {showing ? (
                <BackIcon {...iconStyles} />
            ) : (
                <HamburgerIcon {...iconStyles} />
            )}
        </Wrapper>
    )
}
