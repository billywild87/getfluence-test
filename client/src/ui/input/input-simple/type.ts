import { ChangeEventHandler } from "react"

type inputSimpleType = {
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
    disabled?:boolean

}

export type{
    inputSimpleType
}