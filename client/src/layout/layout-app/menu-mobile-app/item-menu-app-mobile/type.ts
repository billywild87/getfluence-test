type itemMenuMobileType ={
    icon:JSX.Element,
    text:string,
    path?:string,
    className?:string,
    type:'action' | 'nav',
    onAction:(path:string)=>void |undefined
 }

export type {
    itemMenuMobileType
}