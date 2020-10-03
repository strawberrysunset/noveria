import {useSettings} from '../../context'
import {themes, common} from './themes'
import {useIsMobile} from 'utilities'

export const useTheme = () => {
  const {theme} = useSettings()
  const isMobile = useIsMobile(768)
  return {...common, ...themes[theme], isMobile}
}