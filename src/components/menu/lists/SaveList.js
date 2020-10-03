import {useSettings, useMenu } from '../../../context'

export const SaveList = () => {

    const {updateSettings} = useSettings()
    const {updateMenu} = useMenu()
    
    return [
      {
        onClick: () => {
          updateSettings({type: 'set_save', status: true })
          updateMenu({type: 'go_back'})
        },
        title: 'Save',
      },
      {
        onClick: () => {
          updateSettings({type: 'set_save', status: false })
          updateMenu({type: 'go_back'})
        },
        title: 'Do Not Save',
      }
    ] 
}