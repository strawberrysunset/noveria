import React from 'react'
import styled, {css} from 'styled-components/macro'
import { NoveriaLogo } from '../assets'
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

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.neutral[100]};
  /* background-image: ${props => {
    // return css`url("${"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23" + props.theme.colors.neutral[1200].slice(1) + "' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}");`
  }} */
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

const Text = styled(motion.p)`
  /* font-weight: bold; */
  margin-top: 1.5rem;
  margin-left: 0.1rem;
  text-align: center;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.neutral[1400]};
`



const Version = styled.p`
  text-transform: uppercase;
  position: absolute;
  bottom: 10%;
  /* left: 3rem; */
  font-weight: bold;
  font-size: ${props => props.theme.typeScale.bodySmall};
  color: ${props => props.theme.colors.neutral[1300]};
`

const animation = {

}

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
          <Text initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: 3}}>loading</Text>
          <Version>Noveria v1.0</Version>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
