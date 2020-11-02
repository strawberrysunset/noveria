import React from 'react'
import styled from 'styled-components/macro'
import {NoveriaLogo, DarkModeButton} from '../assets'
import {MenuButton} from '../menu'
import {useNotification, useSettings} from '../../context'
import {motion, useAnimation} from 'framer-motion'
import {useIsFetching, useQueryCache} from 'react-query'
import {Spinner} from '../common'

const Wrapper = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.neutral[1200]}; 
  background-color: ${props => props.theme.colors.neutral[1100]};
  width: 100%;
  display: grid;
  width: 100%;
  grid-auto-columns: 3.5rem 1fr 3.5rem;
  grid-auto-flow: column;
  align-items: center;
  @media (min-width: 48rem) {
    grid-auto-columns: 3.5rem 1fr 1fr 1fr;
  }
  /* background: linear-gradient(90deg, ${props => props.theme.colors.neutral[1100]}, ${props => props.theme.colors.neutral[100]}); */
`

const Message = styled(motion.div)`
  margin-bottom: -0.35rem;
  font-weight: 600;
  margin-left: 2rem;
  user-select: none;
  display: none;
  @media (min-width: 48rem) {
    display: block;
    color: ${props => props.theme.colors.neutral[1400]};
  }
`

const Logo = styled(NoveriaLogo)`
  margin: 0 auto;
  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutral[1200]};
  }
`

const DarkMode = styled(DarkModeButton)`
  margin-right: 1rem;
  justify-self: end;
`

export const Header = ({ ...rest }) => {

  const notification = useNotification()
  const settings = useSettings()
  const controls = useAnimation()
  const queryCache = useQueryCache()
  const isFetching = useIsFetching()

  React.useEffect(() => {
    controls.start({
      opacity: [null, 100],
      transition: {
        duration: 5
      }
    })
  }, [notification])

  React.useEffect(() => {
    notification.updateNotification({type:'set_message', message: 'Welcome to Noveria.'})
  }, [])

  return (
    <Wrapper  {...rest}>
      <MenuButton />
      <Message animate={controls}>{notification.message}</Message>
      <Logo onClick={() => queryCache.refetchQueries('coinData')}/>
      {/* {isFetching && <Spinner css="position: absolute;" height="1rem" width="1rem"/>} */}
      <DarkMode onClick={() => settings.updateSettings({ type: 'toggle_dark_mode' })}/>
    </Wrapper>
  )
}
