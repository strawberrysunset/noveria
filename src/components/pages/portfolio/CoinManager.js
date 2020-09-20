import React from 'react'
import styled from 'styled-components/macro'
import { MdCreate as Icon } from 'react-icons/md'
import { Card, Button, Input, Select } from '../../common'
import {usePortfolio, useAPI, useUser} from '../../../context'

const Wrapper = styled.div`
  padding: 1.5rem;
`

const Inputs = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  align-items: center;
`

const Error = styled.p`
  color: ${(props) => props.theme.colors.red[100]};
`

export const CoinManager = ({ ...rest }) => {

  const [{ coins }, portfolioDispatch] = usePortfolio()
  const [{ data }] = useAPI()
  const [user] = useUser()

  const [coinID, setCoinID] = React.useState(data.coinList[0])
  const [amount, setAmount] = React.useState(null)
  const [error, setError] = React.useState('')

  const listOptions = data.coinList.map((coin, idx) => {
    return (
      <option key={idx} value={idx}>
        {coin.name}
      </option>
    )
  })

  function validateInputs() {
    if (!coinID) {
      return setError('Please select a coin.')
    }
    if (!amount) {
      return setError('Please enter an amount.')
    }
    setError('') // Reset error message.
    portfolioDispatch({type: 'add_coin', id: coinID, amount})
  }

  return (

    <Card icon={Icon} label="Add a Coin" {...rest}>
      <Wrapper>
        <Inputs>
          <Select
            name="coin"
            label="Coin"
            type="text"
            list="coins"
            required
            placeholder="Enter coin name"
            onChange={(e) => setCoinID(data.coinList[e.target.value].id)}
          >
            {listOptions}
          </Select>
          <Input
            name="amount"
            label="Amount"
            type="text"
            required
            pattern="^[+-]?(\d*\.)?\d+$" // Match decimal
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button onClick={validateInputs}>+Add coin</Button>
          <Error>{error}</Error>
        </Inputs>
      </Wrapper>
    </Card>
  )
}
