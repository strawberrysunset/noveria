import {useSettings} from '../../context'
import {neutralShades, hues, colors, fonts, typeScale} from './theme'
import {useIsMobile} from 'utilities'
import {createColorPalette} from './createColorPalette'

export const useTheme = () => {
  const {theme, darkMode} = useSettings()
  const isMobile = useIsMobile(768)
  const colorPalette = createColorPalette(neutralShades[darkMode ? 'dark' : 'light'], colors, hues[theme])
  return {
    typeScale,
    fonts, 
    colors: colorPalette, 
    isMobile
  }
}