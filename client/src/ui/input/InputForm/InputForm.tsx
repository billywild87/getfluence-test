import styles from './InputForm.module.scss';
import {InputFormType} from './type';
import { CSSProperties, useState } from 'react';
import { useSpring,animated } from 'react-spring';

export default function InputForm({icon,value,label,className,placeholder,onChange,id,type,name,autoComplete,color,colorPlaceHolder}:InputFormType){

    //State 
   const [focus,setFocus] = useState(false)

   //Spring react to focus Handler
   const colorInput = useSpring({
        valueInput: focus ? 'var(--primary-color)': 'var(--inactif-color)',
        valuePlaceHolder:focus ? 'var(--sub-text-color)' : 'var(--inactif-color)'
});
   //Handler Focus Input and onBlur
   function focusHandler(){
        setFocus((focus:boolean)=>!focus);
   }

   //Redistribution of colors animated in variable css
   const styledInput = {
       inputContainer:{
       '--color-input': colorInput.valueInput,
       '--placeholder-color':colorInput.valuePlaceHolder
       } as CSSProperties
   }


    return(
        <div className={`${styles["input-form-wrapper"]} ${className}`}>
            <label htmlFor={id}>{label}</label>
            <animated.div style={styledInput.inputContainer} className={styles["input-form-container"]}>
                <input autoComplete={autoComplete} name={name}  type={type} id={id}   onChange={onChange} onBlur={focusHandler} onFocus={focusHandler} value={value} placeholder={placeholder}/>
                {icon}
            </animated.div>
        </div>
    )
}