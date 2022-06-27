import styles from './InputSimple.module.scss';
import { inputSimpleType } from './type';
import { CSSProperties, useState } from 'react';

export default function InputSimple({label,value,className,placeholder,onChange,id,type,name,color,colorPlaceHolder,autoComplete,disabled}:inputSimpleType){
    const [focus,setFocus] = useState<boolean>(false);
    
    var styled ={
        input:{
            '--focus-color': focus ? 'var(--secondary-color)' : 'var(--inactif-color)'
        } as CSSProperties
    }


    function onFocus(){
        setFocus(true)
    }

    function onBlur(){
        setFocus(false)
    }

    return(
        <div style={styled.input} className={`${styles["input-simple-wrapper"]} ${className}`}>
            <label htmlFor={id}>{`${label} : `}</label>
            <input disabled={disabled} onFocus={onFocus} onBlur={onBlur} value={value} onChange={onChange} id={id} placeholder={placeholder} type={type} name={name} />
        </div>
    )
}