import React from "react";
import styled from "styled-components";
import {RiCheckboxBlankCircleFill as PointSymbol} from 'react-icons/ri'
import {motion} from 'framer-motion'
import { VictoryPortal } from "victory";

const Wrapper = styled(motion.g)`
  
`

const ContentWrapper = styled.div`
  background: ${props => props.theme.colors.neutral[1400]};
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.1rem;
  box-shadow: 0rem 0rem 1.5rem ${props => props.theme.colors.neutral[1000]};
  width: 5rem;
  height: 2rem;
`

const Symbol = styled(PointSymbol)`
  position: absolute;
  top: -0.25rem;
  left: -0.25rem;
  height: 0.5rem;
  width: 0.5rem;
  color: ${props => props.theme.colors.neutral[1600]};
`

const Content = styled.div`
  padding: 0.5rem;
  
  /* border-top: 0.5rem solid ${props => props.theme.colors.neutral[1200]}; */
  
`

export const Tooltip = ({ x, y, datum}) => {
  return (
      // <VictoryPortal>
      <Wrapper style={{ pointerEvents: "none" }} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ease: 'easeInOut', duration: 0.1}}>
          <foreignObject style={{ overflow: 'visible'}} x={x} y={y} width="10rem" height="5rem">
            <ContentWrapper>
              <Symbol/>
              <Content>
                <div>{datum.y}</div>
                <div>{datum.x}</div>
              </Content>
            </ContentWrapper>
          </foreignObject>
      </Wrapper>
    // </VictoryPortal>
  );
};
