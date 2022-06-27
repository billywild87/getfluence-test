import { useNavigate } from 'react-router-dom';
import Logo from '../../common/logo/Logo';
import ButtonForm from '../../ui/button/buttonForm/ButtonForm';
import styles from './SignValid.module.scss';


export default function SignValid(){
    const navigate = useNavigate();
    function goToConnexion(){
        navigate('/auth/signup',{replace:true})
    }

    return(
        <div className={styles["sign-valid-page"]}>
            <Logo className={styles["sign-valid-logo"]}/>
            <div className={styles["sign-valid-title"]}>
              On vous remercie pour votre inscription.
            </div>
            <div className={styles["sign-valid-sentence"]}>
             Connectez vous maintenant pour acceder à l'application.
            </div>
            <div className={styles["sign-valid-action"]}>
            <ButtonForm color={"var(--primary-color)"}  hoverColor={"var(--primary-darker)"} onClick={goToConnexion} text={"Connectez vous"}/>
            </div>
        </div>
    )
}