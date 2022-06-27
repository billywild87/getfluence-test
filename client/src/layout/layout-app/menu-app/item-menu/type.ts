type itemMenuType ={
    icon:JSX.Element,
    text:string,
    path?:string,
    className?:string,
    type:'action' | 'nav',
    onAction:(path:string)=>void |undefined
 }

export type {
    itemMenuType
}