import React from 'react'
import styled from 'styled-components/macro'
import {NoveriaLogo, DarkModeButton} from '../../assets'
import {MenuButton} from '../menu'
import {Button} from '../common'
import {useNotification, useAPI, useUser} from '../../context'
import {motion, useAnimation} from 'framer-motion'

const Wrapper = styled.header`
  border-bottom: 0.5rem solid ${props => props.theme.colors.neutral[400]}; 
  background: ${props => props.theme.colors.neutral[100]};
  width: 100%;
  display: grid;
  width: 100%;
  grid-auto-columns: 3.5rem 1fr 3.5rem;
  grid-auto-flow: column;
  align-items: center;
  @media (min-width: 48rem) {
    grid-auto-columns: 3.5rem 1fr 1fr 1fr;
  }
`

const Message = styled(motion.div)`
  margin-bottom: -0.2rem;
  font-weight: 400;
  margin-left: 2rem;
  user-select: none;
  display: none;
  @media (min-width: 48rem) {
    display: block;
    color: ${props => props.theme.colors.neutral[1200]};
  }
`

const Logo = styled(NoveriaLogo)`
  :hover {
    cursor: pointer;
  }
`
const RefreshButton = styled(Button)``

export const Header = ({ ...rest }) => {

  const [{status}] = useNotification()
  const [APIState, APIDispatch] = useAPI()
  const [userState, userDispatch] = useUser()

  const controls = useAnimation()

  React.useEffect(() => {
    controls.start({
      opacity: [null, 100, 0],
      transition: {
        duration: 3
      }
    })
  }, [status])

  return (
    <Wrapper {...rest}>
      <MenuButton />
      
      <Message animate={controls}>{status.message}</Message>
      <Logo onClick={() => {
        APIDispatch({type: 'refresh'})
      }}/>
      <DarkModeButton
        onClick={() => {
          userDispatch({ type: 'toggle_theme' })
        }}
        css={`
          margin-right: 1rem;
          justify-self: end;
        `}
      />
    </Wrapper>
  )
}
