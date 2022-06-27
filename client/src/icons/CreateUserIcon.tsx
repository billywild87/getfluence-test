import * as React from "react"
type TypeProps={
    height?:number,
    width?:number,
    fill?:string 
  }
  
const CreateUserIcon = ({fill,height,width}:TypeProps) => (
  <svg
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"   
  >
 <path
      d="M4 6c0-.69.315-1.293.774-1.78.455-.482 1.079-.883 1.793-1.202C7.996 2.377 9.917 2 12 2c2.083 0 4.004.377 5.433 1.018.714.32 1.338.72 1.793 1.202.459.487.774 1.09.774 1.78v4.078a3.732 3.732 0 0 0-1.5-.545v-1.14c-.32.22-.68.416-1.067.59C16.004 9.622 14.083 10 12 10c-2.083 0-4.004-.377-5.433-1.018a6.801 6.801 0 0 1-1.067-.59V18c0 .207.09.46.365.75.279.296.717.596 1.315.864 1.195.535 2.899.886 4.82.886.091 0 .182 0 .272-.002.195.527.487 1.022.866 1.464-.372.025-.752.038-1.138.038-2.083 0-4.004-.377-5.433-1.017-.714-.32-1.338-.72-1.793-1.203C4.315 19.293 4 18.69 4 18V6Zm1.5 0c0 .207.09.46.365.75.279.296.717.596 1.315.864 1.195.535 2.899.886 4.82.886 1.921 0 3.625-.35 4.82-.886.598-.268 1.036-.568 1.315-.864.275-.29.365-.543.365-.75 0-.207-.09-.46-.365-.75-.279-.296-.717-.596-1.315-.864C15.625 3.851 13.92 3.5 12 3.5c-1.921 0-3.625.35-4.82.886-.598.268-1.036.568-1.315.864-.275.29-.365.543-.365.75Zm13 4.545a2.745 2.745 0 0 1 1.879 1.324c.236.406.371.878.371 1.381a2.74 2.74 0 0 1-.75 1.887A2.745 2.745 0 0 1 18 16a2.751 2.751 0 1 1 .5-5.455ZM14.5 17a1.5 1.5 0 0 0-1.5 1.5v.5c0 .352.06.707.175 1.05.044.133.097.264.158.392.24.508.607.983 1.088 1.381C15.274 22.53 16.489 23 18 23c3.14 0 5-2.029 5-4v-.5a1.5 1.5 0 0 0-1.5-1.5h-7Z"
      fill={fill}
    />
  </svg>
)

export default CreateUserIcon
