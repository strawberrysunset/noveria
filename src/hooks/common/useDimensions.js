import React from "react";
 
export const useWindowDimensions = (myRef) => {

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [isResizing, setIsResizing] = React.useState(true);
  
  const handleResize = React.useCallback((ref) => {
    setIsResizing(true)
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
    setIsResizing(false)
  }, [])
  
  // Set dimensions initially if ref exists.
  React.useEffect(() => {
    setIsResizing(true)
    handleResize()
    setIsResizing(false)
  }, [handleResize])

  React.useEffect(() => {
    handleResize(myRef)
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef, handleResize]);
 
  return { width, height, isResizing };
};
