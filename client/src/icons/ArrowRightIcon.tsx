import * as React from "react"
type TypeProps={
    height?:number,
    width?:number,
    fill?:string 
  }
  
const ArrowRightIcon = ({fill,height,width}:TypeProps) => (
  <svg
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"   
  >
   <path
      d="m19.704 12-8.492-8.727a.75.75 0 1 1 1.075-1.046l9 9.25a.75.75 0 0 1 0 1.046l-9 9.25a.75.75 0 1 1-1.075-1.046L19.705 12Z"
      fill={fill}
    />
  </svg>
)

export default ArrowRightIcon
