import React from 'react'

export const useIsScroll = (ref) => {
  const [isScroll, setIsScroll] = React.useState(false);
  React.useEffect(() => { 
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight)
      setIsScroll(ref.current.scrollHeight > ref.current.clientHeight)
    }
  }, [ref])
  return {isScroll}
}