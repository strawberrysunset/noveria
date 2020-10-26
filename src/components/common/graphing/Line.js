import React from "react";
import styled from 'styled-components'
import {
  VictoryLine,
  VictoryGroup,
} from "victory"

const Container = styled.div`

`

export const Line = ({data: bigData, color, lineProps, ...rest}) => {

  return (
        <Container {...rest}> 
          {lineProps.data && (
          <VictoryGroup
            padding={0}
            width={300}
            height={100}
            domainPadding={{ x: 0, y: 0 }}
          >
            <VictoryLine
              style={{
                data: {
                  stroke: color,
                  strokeWidth: '4px', 
                }
              }}
              width={300}
              height={100}
              {...lineProps}
            />
          </VictoryGroup>
          )}
        </Container>
      )


  // return (
  //   // <ResponsiveContainer width={100} height="40%">
  //     <LineChart
  //       width={20}
  //       height={60}
  //       data={data}
  //       margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
  //       {...rest}
        
  //     >
  //       {/* <XAxis dataKey="name" /> */}
  //       <LineEl type="monotone" dataKey="value" dot={false} stroke={color} strokeWidth={1.5} isAnimationActive={false}/>
  //     </LineChart>
  //   // </ResponsiveContainer>
  // )
}

//   

  





//   
// }