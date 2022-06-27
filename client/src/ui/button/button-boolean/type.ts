type buttonBoolean = {
    content?: JSX.Element,
    type?:'normal' | 'round',
    value:boolean,
    handlerClick:(val:boolean)=>void,
    className?:string,
    customClassName?:string
    
}

export type {
    buttonBoolean
}