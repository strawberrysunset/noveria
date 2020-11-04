import React from 'react'
import {neutralShades, hues, colors, fonts, typeScale} from './theme'
import {useIsMobile} from 'utilities'
import {createColorPalette} from './createColorPalette'

export const useTheme = ({theme, darkMode}) => {
  
  const isMobile = useIsMobile(768)

  const colorPalette = React.useMemo(() => {
    const shades = neutralShades[darkMode ? 'dark' : 'light']
    return createColorPalette(shades, colors, hues[theme])
  }, [theme, darkMode])
 
  return {
    typeScale,
    fonts, 
    colors: colorPalette, 
    isMobile,
    darkMode
  }
}