import { CSSProperties,useState } from 'react';
import styles from './ButtonSimple.module.scss';
import { controlColorButton } from '../../../helpers/helpers_colors';
import { buttonSimpleType } from "./type";


export default function ButtonSimple({text,className,type,onClick}:buttonSimpleType){

    const [hover,setHover] = useState<boolean>(false);

    var styled = {
        button:{
            '--background-button-simple':controlColorButton(type,hover).background,
            '--text-button-simple':controlColorButton(type,hover).color
        } as CSSProperties
    }

    function onHover(){
        setHover((prevState:boolean)=>!prevState)
    }
    
    return(
        <button onClick={onClick} style={styled.button} onMouseEnter={onHover} onMouseLeave={onHover} className={`${styles["button-simple"]} ${className}`}>
            {text}
        </button>
    )
}