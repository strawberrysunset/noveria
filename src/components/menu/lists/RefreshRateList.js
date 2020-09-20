import {useUser, useMenu} from '../../../context'

export const RefreshRateList = () => {

  const [user, userDispatch] = useUser()
  const [menu, menuDispatch] = useMenu()
  
  return [30, 60, 120, 180].map(rate => {
    return {
      onClick: () => {
        userDispatch({type: 'set_refreshRate', refreshRate: rate})
        menuDispatch({type: 'go_back'})
      },
      title: rate.toString() + 's'
    }
  })
}
