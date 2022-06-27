import Logo from '../../common/logo/Logo';
import styles from './Home.module.scss';

export default function Home(){
    return(
        <div className={styles["home-container"]}>
            <div className={styles["card-home"]}>
                <Logo className={styles["logo-home"]}/>
                <div className={styles["sentence-home"]}>Bienvenue sur l'application</div>
            </div>
        </div>
    )
}