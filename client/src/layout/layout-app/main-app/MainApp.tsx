import styles from './MainApp.module.scss';
import {mainAppType} from './type'; 
export default function MainApp({children}:mainAppType){
    return(
        <div className={styles["main-app-container"]}>
            {children}
        </div>
    )
}