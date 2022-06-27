
import { useEffect, useRef } from 'react'

//THIS IS THE CUSTOM HOOK

export const usePrevLocation = (location) => {

const prevLocRef = useRef()

useEffect(()=>{

prevLocRef.current = location

},[location])

return prevLocRef.current

}