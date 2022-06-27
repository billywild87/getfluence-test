import styles from './ItemMenu.module.scss';
import { itemMenuType } from './type';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSSProperties, useState } from 'react';
import { on } from 'events';
export default function ItemMenu({icon,text,path,className,type,onAction}:itemMenuType){

    const navigate = useNavigate();
    const location = useLocation();
    const [hover,setHover] = useState<boolean>(false);
    const [press,setPress] = useState<boolean>(false)
    var styled ={
        container:{
            '--container-item-color': path === location.pathname ? 'var(--secondary-color)' : hover && !press ? 'var(--secondary-lighter)' : press && hover ? 'var(--secondary-middle)' :'transparent',
            '--text-item-color': (path === location.pathname || hover) ? 'var(--primary-color)':'var(--secondary-color)'
        } as CSSProperties
    }


    function onHover(){
        setHover((prevState:boolean)=>!prevState)
    }

    function onPress(value:boolean){
        setPress(value)
    }

    function goToPage(){
        if(path && type == 'nav'){
            onAction(path)
        }
        else{
            onAction('leave')
        }
       
    }

    return(
        <div onClick={goToPage} onMouseEnter={onHover} onMouseLeave={onHover} onMouseDown={()=>onPress(true)} onMouseUp={()=>onPress(false)} style={styled.container} className={`${styles["item-menu"]} ${className}`}>
            {icon}
            <span>{text}</span>
        </div>
    )
}