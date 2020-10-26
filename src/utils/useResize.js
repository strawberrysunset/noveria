import React from "react";
 
export const useResize = (myRef) => {

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [isResizing, setIsResizing] = React.useState(true);
  
  // Set dimensions initially if ref exists.
  React.useEffect(() => {
    setIsResizing(true)
    if (myRef.current) {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    }
    setIsResizing(false)
  }, [])

  React.useEffect(() => {

    const handleResize = () => {
      setIsResizing(true)
      if (myRef.current) {
        setWidth(myRef.current.offsetWidth);
        setHeight(myRef.current.offsetHeight);
      }
      setIsResizing(false)
    };
    
    window.addEventListener("resize", handleResize);
 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);
 
  return { width, height, isResizing };
};
