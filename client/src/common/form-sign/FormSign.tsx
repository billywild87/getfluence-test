import styles from './FormSign.module.scss'
import Logo from '../logo/Logo';
import { formSignType } from './type';

export default function FormSign({title,sentence,children}:formSignType){
    return(
        <div className={styles["form-sign-container"]}>
            <Logo className={styles["logo-sign"]}/>
            <div className={styles["title-sign"]}>
                <h2>{title}</h2>
                <div  className={styles["sign-sentence"]}>{sentence}</div>
            </div>
            <div className={styles["forms-container"]}>
            {children}
            </div>
        </div>
    )
}
