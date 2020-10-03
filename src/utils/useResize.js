import React from "react";
 
export const useResize = (myRef) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
 
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    };
 
    window.addEventListener("resize", handleResize);
 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);
 
  return { width, height };
};