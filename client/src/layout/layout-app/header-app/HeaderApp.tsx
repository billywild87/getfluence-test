import Logo from '../../../common/logo/Logo';
import styles from './HeaderApp.module.scss';


export default function HeaderApp(){
    return(
        <div className={styles["header-app-container"]}>
            <div className={styles["container-logo"]}>
                <Logo className={styles["logo"]}/>
            </div>
        </div>
    )
}