import * as React from "react"
type TypeProps={
    height?:number,
    width?:number,
    fill?:string 
  }
  
const LogoIcon = ({fill,height,width}:TypeProps) => (
  <svg
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"   
  >
   <path
      d="M11.75 7.5a.75.75 0 0 0 0 1.5c1.322 0 2.712.759 3.41 1.756a.75.75 0 1 0 1.229-.86C15.413 8.502 13.567 7.5 11.75 7.5Z"
      fill={fill}
    />
    <path
      d="M9.5 4.5a2.5 2.5 0 0 1 5 0v.88a8.245 8.245 0 0 1 5.75 7.87.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75c0-3.679 2.422-6.793 5.75-7.858V4.5Zm3.5 0a1 1 0 1 0-2 0v.563a8.332 8.332 0 0 1 2-.005V4.5Zm-7.708 8h13.417c-.37-3.376-3.216-6-6.688-6-3.475 0-6.354 2.628-6.73 6ZM4 15a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm-.5 2a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5Z"
      fill={fill}
    />
  </svg>
)

export default LogoIcon
