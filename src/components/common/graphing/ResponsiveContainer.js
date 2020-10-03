import React from 'react'
import {VictoryGroup} from 'victory'
import {useResize} from '../../../utils'

export const ResponsiveContainer = ({ children,  ...rest }) => { 
  
  const componentRef = React.useRef();
  const { width, height } = useResize(componentRef);

  return (
    <VictoryGroup
      ref={componentRef}
      width={width}
      height={height}
      {...rest}
    >{children}</VictoryGroup>
  )
}