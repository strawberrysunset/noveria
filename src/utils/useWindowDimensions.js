import React from "react";
 
export const useWindowDimensions = () => {

  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = React.useState(window.innerHeight);
  
  const handleResize = React.useCallback(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  }, [])

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
 
  return { innerWidth, innerHeight};
};
