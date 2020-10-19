import React from 'react'
import styled, {css} from 'styled-components/macro'
import { MdCreate as Icon } from 'react-icons/md'
import { Card, Button, Input, Select} from '../../common'
import {motion} from 'framer-motion'
import {useCoinData} from '../../../hooks/api'
import {useForm} from '../../../hooks/common'
import {usePortfolio, useTheme} from '../../../context'
import {ShowHideToggle} from './ShowHideToggle'

const StyledCard = styled(Card)`
 
`

const Wrapper = styled(motion.form)`
  width: 100%;
  height: 100%;
  padding: 3rem;
  ${props => props.theme.isMobile && css`
    padding: 1.5rem;
  `}
  ${props => {
    if (!props.theme.isMobile) return css``
    if (!props.showing) return css`
      display: none;
    `
    return
  }}
`

const Inputs = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  align-items: center;
`

const Error = styled.p`
  color: ${(props) => props.theme.colors.red[100]};
`

export const AssetManager = ({ ...rest }) => {

  const {coinData, isLoading} = useCoinData()
  const {updatePortfolio} = usePortfolio()
  const [showing, setShowing] = React.useState(true)
  const theme = useTheme()
  
  const {values, error, handleChange, submit, isSubmitting} = useForm({
    initialValues : {
      id: 'bitcoin', 
      amount: undefined,
    },
    onSubmit: async ({id, amount}) => {
      await updatePortfolio({type: 'create_asset', id, amount})
    }
  })


  const listOptions = coinData.sort((a, b) => a.name > b.name).map((coin, idx) => {
    return (
      <option key={idx} value={coin.id}>
        {coin.name}
      </option>
    )
  })

  const animate = () => {
    if (!theme.isMobile) return
    return {
      opacity: showing ? 100 : 0, 
      y: showing ? 0 : -50
    }
  }
   

  return (
    <StyledCard icon={Icon} items={<ShowHideToggle showing={showing} setShowing={setShowing}/>} label="Add an Asset" {...rest}>
      <Wrapper animate={animate()} showing={showing} onSubmit={submit}>
        <Inputs>
          <Select
            name="id"
            type="text"
            placeholder="Enter asset name"
            onChange={handleChange}
            disabled={isLoading}
            label="Asset" // For component
            value={values.id}
          >
            {isLoading ? <option>Loading...</option> : listOptions}
          </Select>
          <Input
            name="amount"
            label="Amount"
            type="text"
            // pattern="^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$" // Match decimal
            placeholder="Enter Amount"
            onChange={handleChange}
            disabled={isLoading}
          />
          <Button type="submit" disabled={!values.amount || isLoading || isSubmitting}>{isSubmitting ? 'Creating Asset...' : '+ Add asset'}</Button>
          <Error>{error}</Error>
        </Inputs>
      </Wrapper>
    </StyledCard>
  )
}
