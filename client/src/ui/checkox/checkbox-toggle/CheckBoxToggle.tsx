import styles from './CheckBoxToggle.module.scss';
import {ChangeEventHandler} from 'react';

type PropsType ={
    id:string,
    icon:JSX.Element,
    onChange?:ChangeEventHandler<HTMLInputElement>,
    checked:boolean,
}

export default function CheckToggle({id,icon,checked,onChange}:PropsType){
    return(
        <div>
            <label className={styles["toggle"]} htmlFor={id} >
            <input onChange={onChange} checked={checked} type="checkbox" className={styles["input-toggle"]} id={id}/>
            <span className={styles["toggle-track"]}>
                <span className={styles["toggle-indicator"]}>
                    <span className={styles["checkMark"]}>
                        {icon}
                    </span>
                </span>
            </span>
            </label>


        </div>
    )
}