import React from 'react'
import styled, {css} from 'styled-components/macro'
import { MdCreate as Icon } from 'react-icons/md'
import { Card, Button, Input, Select} from '../../common'
import {motion} from 'framer-motion'
import {useCoinData} from '../../../hooks/api'
import {useForm} from '../../../hooks/common'
import {usePortfolio} from '../../../context'

const StyledCard = styled(Card)`
 
`

const Wrapper = styled(motion.form)`
  width: 100%;
  height: 100%;
  padding: 3rem;
  ${props => props.theme.isMobile && css`
    padding: 1.5rem;
  `}
`

const Inputs = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  align-items: center;
`

const Error = styled.p`
  color: ${(props) => props.theme.colors.red[100]};
`
const Cancel = styled.p`
  color :${props => props.theme.colors.neutral[1400]};
`

export const AssetManager = ({ handleClose, ...rest }) => {

  const {data: topCoins, isLoading} = useCoinData({limit: 500});
  const {updatePortfolio} = usePortfolio()
  
  const {values, error, isSubmitting, handleChange, submit} = useForm({
    initialValues : {
      id: 'bitcoin', 
      amount: undefined,
    },
    onSubmit: async ({id, amount}) => {
      await updatePortfolio({type: 'create_asset', id, amount})
      if (handleClose) handleClose();
    }
  })

  const listOptions = isLoading ? <option>Loading...</option> : topCoins.sort((a, b) => a.name > b.name).map((coin, idx) => {
    return (
      <option key={idx} value={coin.id}>
        {coin.name}
      </option>
    )
  })


  return (
    <StyledCard isLoading={isLoading} icon={Icon} items={handleClose && <Cancel onClick={handleClose}>Cancel</Cancel>} label="Add an Asset" {...rest}>
      <Wrapper onSubmit={submit}>
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
            {listOptions}
          </Select>
          <Input
            name="amount"
            label="Amount"
            type="text"
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
