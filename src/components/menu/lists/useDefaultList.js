import React from 'react'
import styled from 'styled-components'
import {useSettings, useNotification, usePortfolio} from '../../../context'
import {ListItem} from './ListItem'
import {capitalize} from 'utilities'
import {FaDollarSign,FaShareSquare} from 'react-icons/fa'
import {CgImport, CgExport} from 'react-icons/cg'
import {IoIosColorPalette} from 'react-icons/io'
import {saveData} from '../../../utils'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const Icon = ({icon, name}) => (
  <Wrapper>
    {icon}
    <p css={`margin-top: 0.15rem;`}>{name}</p>
  </Wrapper>
)

export const useDefaultList = ({updateMenu}) => {

  const settings = useSettings()
  const portfolio = usePortfolio()
  const {updateNotification} = useNotification()

  return [
    <ListItem left={<Icon icon={<FaDollarSign size="1.125rem"/>} name="Currency"/>} right={settings.currency.toUpperCase()} onClick={() => listClickHandler('currency')}/>,
    <ListItem left={<Icon icon={<IoIosColorPalette size="1.125rem"/>} name="Theme"/>} right={capitalize(settings.theme)} onClick={() => listClickHandler('theme')}/>,
    <ListItem left={<Icon icon={<FaShareSquare size="1rem"/>} name="Share"/>} onClick={() => listClickHandler('share')}/>,
    <ListItem as="label" left={<Icon icon={<CgImport size="1.125rem"/>} name="Import Portfolio" />} htmlFor="file"></ListItem>,
    <ListItem left={<Icon icon={<CgExport size="1.125rem"/>} name="Export Portfolio"/>} onClick={handlePortfolioExportClick}/>,
    <input style={{display: 'none'}} type="file" accept=".txt" id="file" onChange={handleFileInputChange} />
  ]

  async function handleFileInputChange (event) {
    
    const file = event.target.files[0]
    if (!file) return
    const text = await file.text()
    const assets = JSON.parse(text)
    portfolio.updatePortfolio({type: 'remove_all_assets'})
    for (const asset of assets) {
      portfolio.updatePortfolio({type: 'create_asset', id: asset.id, amount: asset.amount })
    }
    updateNotification({type: 'set_message', message: `Portfolio successfully imported.`})
    updateMenu({type : 'toggle_menu'})
  }

  function handlePortfolioExportClick ()  {
    if (portfolio.isEmpty){
      return updateNotification({type: 'set_message', message: `Unable to export. Portfolio is empty.`})
    }
    saveData(JSON.stringify(portfolio.rawAssets), `Noveria_Portfolio_${new Date().toLocaleDateString()}.txt`)
    updateNotification({type: 'set_message', message: `Portfolio successfully exported.`})
  }

  function listClickHandler (listName) {
    updateMenu({type: 'set_listName', listName})
  }

}