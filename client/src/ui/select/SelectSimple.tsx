import {useState,CSSProperties} from 'react';
import styles from './SelectSimple.module.scss';
import { selectSimpleType } from './type';

export default function SelectSimple({id,label,onChange,name,sentence,list,value,className}:selectSimpleType){
    const [focus,setFocus] = useState<boolean>(false);
    var styled ={
        container:{
            '--focus-color': focus ? 'var(--secondary-color)' : 'var(--inactif-color)',
           
            
        } as CSSProperties
    }


    function onFocus(){
        setFocus(true)
    }

    function onBlur(){
        setFocus(false)
    }
    return(
        <div style={styled.container} className={`${styles["select-simple-container"]} ${className}`}>
          <label htmlFor={id}>{label}</label>
            <div className={styles["select-simple-box"]}>
            <select value={value || ''}  onFocus={onFocus} onBlur={onBlur}  onChange={onChange} name={name} id={id}>
                <option value={''} disabled>{sentence}</option>
                {list.map((item:{text:string,id:string},i:number)=>{
                    return <option  key={`${i.toString()}-pays`} value={item.id}>{item.text}</option>
                })}
            </select>
            </div>  
        </div>
    )
}