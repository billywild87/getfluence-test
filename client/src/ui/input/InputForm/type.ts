import {ChangeEventHandler} from 'react'
 type InputFormType ={
    icon:JSX.Element,
    value?:string,
    label?:string,
    className?:string,
    placeholder?:string,
    onChange:ChangeEventHandler<HTMLInputElement>
    id:string,
    type:string,
    name?:string,
    autoComplete?:string,
    color?:string,
    colorPlaceHolder?:string,

}

export type {InputFormType}