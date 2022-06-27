import {ChangeEventHandler} from 'react';


type selectSimpleType = {
    id:string,
    label:string,
    onChange:ChangeEventHandler<HTMLSelectElement>,
    name:string,
    sentence:string,
    list:any,
    value:string,
    className:string | string[]
}


export type {
    selectSimpleType
}