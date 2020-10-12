import React from 'react'
import styled from 'styled-components/macro'
import { NoveriaLogo } from '../../assets'
import { motion, AnimatePresence } from 'framer-motion'
import { useQueryCache, useIsFetching } from 'react-query'
import {Spinner} from '../common'

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.neutral[100]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const LogoWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 4.5rem;
  height: 4.5rem;
`

const Logo = styled(NoveriaLogo)`
  margin-bottom: 0.3rem;
`

const Spin = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: grid;
  place-items: center;
`

const Text = styled.p`
  /* font-weight: bold; */
  margin-top: 1.5rem;
  margin-left: 0.1rem;
  text-align: center;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`

const Version = styled.p`
  text-transform: uppercase;
  position: absolute;
  bottom: 4rem;
  /* left: 3rem; */
  font-weight: bold;
  font-size: ${props => props.theme.typeScale.bodySmall};
  color: ${props => props.theme.colors.neutral[900]};
`

export const LoadingScreen = ({ ...rest }) => {

  const isFetching = useIsFetching()
  const [loaded, setLoaded] = React.useState(false)
  const queryCache = useQueryCache()

  React.useEffect(() => {
    if(!isFetching){
      setLoaded(true)
    }
  }, [isFetching])

  React.useEffect(() => {
    console.log(queryCache.isFetching)
  }, [queryCache.isFetching])
 
  return (
    <AnimatePresence>
      {!loaded && isFetching && (
        
        <Wrapper
          {...rest}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        > 
          <LogoWrapper>
            <Logo/>
            <Spin>
              <Spinner css="width: 4.5rem; height: 4.5rem;"/>
            </Spin>
          </LogoWrapper>
          <Text>loading</Text>
          <Version>Noveria v.1</Version>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
