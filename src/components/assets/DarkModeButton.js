import React from 'react'
import styled from 'styled-components/macro'
import { MdBrightness2 as DarkModeIcon, MdWbSunny as LightModeIcon } from 'react-icons/md'
import {useSettings} from '../../context'


const DarkIcon = styled(DarkModeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme.colors.neutral[1500]};
  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutral[1200]};
  }
`

const LightIcon = styled(LightModeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme.colors.neutral[1500]};
  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutral[1200]};
  }
`

export const DarkModeButton = ({ ...rest }) => {
  const {darkMode} = useSettings()
  return (darkMode ? <LightIcon title="Switch to light mode." {...rest}/> : <DarkIcon title="Switch to dark mode." {...rest} />)
}
