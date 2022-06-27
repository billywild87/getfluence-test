import styles from './ItemMenuAppMobile.module.scss';
import { itemMenuMobileType } from './type';
import {useState,CSSProperties} from 'react';
import { useLocation } from 'react-router-dom';

export default function ItemMenuAppMobile({icon,text,path,className,type,onAction}:itemMenuMobileType){

    const location = useLocation();
    const [hover,setHover] = useState<boolean>(false);
    const [press,setPress] = useState<boolean>(false)
    var styled ={
        container:{
            '--container-item-color': path === location.pathname ? 'var(--primary-color)' : hover && !press ? 'var(--secondary-lighter)' : press && hover ? 'var(--primary-middle)' :'transparent',
            '--text-item-color': (path === location.pathname) ? 'var(--secondary-color)':'white'
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
        <button style={styled.container} onMouseDown={()=>onPress(true)} onMouseUp={()=>onPress(false)} onMouseEnter={onHover} onMouseLeave={onHover} onClick={goToPage}  className={styles["item-menu-mobile"]}>
            {icon}
        </button>
    )
}