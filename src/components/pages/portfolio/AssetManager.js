import React from 'react'
import styled, {keyframes} from 'styled-components/macro'
import { MdCreate as Icon } from 'react-icons/md'
import { AiOutlineReload as StatusIcon } from 'react-icons/ai'
import { Card, Button, Input, Select } from '../../common'
import { motion} from 'framer-motion'
import {useCoinData} from '../../../hooks/api'
import {useForm} from '../../../hooks/common'
import {usePortfolio} from '../../../context'

const Wrapper = styled.form`
  padding: 3rem;
  @media(max-width: 48rem) {
    padding: 1.5rem;
  }
`

const Inputs = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  align-items: center;
`

const Error = styled.p`
  color: ${(props) => props.theme.colors.red[100]};
`

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const AssetManager = ({ ...rest }) => {

  const {coinData, isLoading, isFetching} = useCoinData()

  const {updatePortfolio} = usePortfolio()
  const {values, error, handleChange, submit, isSubmitting } = useForm({
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

  return (
    <Card icon={Icon} label="Add an Asset" {...rest}>
      <Wrapper onSubmit={submit}>
        <Inputs>
          <Select
            name="id"
            type="text"
            placeholder="Enter asset name"
            onChange={handleChange}
            disabled={isLoading}
            label="Asset" // For component
            value="bitcoin"
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
          <Button type="submit" disabled={!values.amount || isLoading || isSubmitting}>{'+ Add asset'}</Button>
          <Error>{error}</Error>
        </Inputs>
      </Wrapper>
    </Card>
  )
}
