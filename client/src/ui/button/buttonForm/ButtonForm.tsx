import { CSSProperties,useState } from 'react';
import styles from './ButtonForm.module.scss';
import {buttonFormType} from './type';
import {useSpring,animated} from 'react-spring';

export default function ButtonForm({text,onClick,color,hoverColor}:buttonFormType){

    const [hover,setHover] = useState(false);

    const springButtonForm = useSpring({
        value : hover ? hoverColor : color
    })


    var styled = {
        button:{
            '--button-form-color': springButtonForm.value
        } as CSSProperties
    }

    function onHover(){
        setHover((prevState:boolean)=>!prevState)
    }

    return(
        <animated.button onMouseEnter={onHover} onMouseLeave={onHover} style={styled.button} onClick={onClick} className={styles["button-form"]}>
            {text}
        </animated.button>
    )
}