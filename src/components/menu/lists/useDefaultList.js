import React from 'react'
import styled from 'styled-components'
import {useSettings, useNotification, usePortfolio} from '../../../context'
import {ListItem} from './ListItem'
import {capitalize} from 'utilities'
import {FaDollarSign,FaShareSquare, FaGithubSquare, FaCoins} from 'react-icons/fa'
import {CgImport, CgExport} from 'react-icons/cg'
import {IoIosColorPalette} from 'react-icons/io'
import {saveData} from '../../../utils'
import {Link} from '../../common'
import {DonationPopUp} from '../DonationPopUp'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5rem auto;
  grid-auto-flow: column;
  align-items: center;
  justify-content:flex-start;
  grid-gap: 0.25rem;
`

const Text = styled.p`
  margin-bottom: -0.2rem;
`

const Icon = ({icon, name}) => (
  <Wrapper>
    {icon}
    <Text>{name}</Text>
  </Wrapper>
)


export const useDefaultList = ({updateMenu}) => {

  const settings = useSettings()
  const portfolio = usePortfolio()
  const {updateNotification} = useNotification()

  return [
    <ListItem key={1} left={<Icon icon={<FaDollarSign size="1.125rem"/>} name="Currency"/>} right={settings.currency.toUpperCase()} onClick={() => listClickHandler('currency')}/>,
    <ListItem key={2} left={<Icon icon={<IoIosColorPalette size="1.125rem"/>} name="Theme"/>} right={capitalize(settings.theme)} onClick={() => listClickHandler('theme')}/>,
    <ListItem key={3} left={<Icon icon={<FaShareSquare size="1rem"/>} name="Share"/>} onClick={() => listClickHandler('share')}/>,
    <ListItem key={4} as="label" left={<Icon icon={<CgImport size="1.125rem"/>} name="Import Portfolio" />} htmlFor="file"></ListItem>,
    <ListItem key={5} left={<Icon icon={<CgExport size="1.125rem"/>} name="Export Portfolio"/>} onClick={handlePortfolioExportClick}/>,
    <Link key={6} external to="https://www.github.com/strawberrysunset/noveria"><ListItem left={<Icon icon={<FaGithubSquare size="1.125rem"/>} name="Source Code"/>}/></Link>,
    // <ListItem left={<Icon icon={<FaCoins size="1.125rem"/>} name="Donate" />} onClick={() => {
    //   updateNotification({type: 'set_popUp_content', popUpContent: DonationPopUp})
    //   updateNotification({type: 'set_showPopUp', showPopUp: true})
    // }}/>,
    <input key={7} style={{display: 'none'}} type="file" accept=".txt" id="file" onChange={handleFileInputChange} />
  ]

  async function handleFileInputChange (event) {
    const file = event.target.files[0]
    if (!file) return
    try {
      const text = await file.text()
      const assets = JSON.parse(text)
      portfolio.updatePortfolio({type: 'remove_all_assets'})
      for (const asset of assets) {
        portfolio.updatePortfolio({type: 'create_asset', id: asset.id, amount: asset.amount })
      }
      updateNotification({type: 'set_message', message: `Portfolio successfully imported.`})
      updateMenu({type : 'toggle_menu'})
    } catch (e) {
      updateNotification({type: 'set_message', message: `Failed to import portfolio.`})
    }
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