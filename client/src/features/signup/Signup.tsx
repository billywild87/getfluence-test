import { ChangeEvent,CSSProperties,useState } from 'react';
import EmailIcon from '../../icons/Email.Icon';
import PasswordIcon from '../../icons/PasswordIcon';
import InputForm from '../../ui/input/InputForm/InputForm';
import styles from './Signup.module.scss';
import CheckBoxToggle from '../../ui/checkox/checkbox-toggle/CheckBoxToggle';
import CheckIcon from '../../icons/CheckIcon';
import { useSpring,animated } from 'react-spring';
import ButtonForm from '../../ui/button/buttonForm/ButtonForm';
import { useNavigate } from 'react-router-dom';
import FormSign from '../../common/form-sign/FormSign';
import firebaseAuth from '../../services/firebase';
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { signUpType } from './type';
import ErrorMessage from '../../common/error-message/ErrorMessage';
import { useAuth } from '../../context/AuthContext';
//import { useAppDispatch } from '../../apps/hooks';





export default function SignUp(){
 
    const {setAuthorized} = useAuth();

    /* STATE */

    // state identifiant
    const [login,setLogin] = useState<signUpType>({
        email:'',
        password:'',
    })

    // state permettant d'afficher un message à l'utilisateur si son login n'est pas correct
 

    // state permettant de savoir si l'utilisateur est persistant
    const [isRemember,setIsRemember] = useState<boolean>(false);
    
    
    //Instance du Hook de navigation de react-router-dom
    const navigate = useNavigate();
    
    const [codeError,setCodeError] = useState('');

   
    //Function onChange des input pour modifier le state login
    function onChangeLogin(e:ChangeEvent<HTMLInputElement>){
        if(codeError!==''){
            setCodeError('')
        }
        setLogin({...login,[e.target.name]:e.target.value})
    }

    function onRemember(){
        setIsRemember((prevState)=>!prevState)
    }

    //
    const springRemember = useSpring({
        valueColor : isRemember ? 'var(--text-color)': 'var(--inactif-color)',
        valueWeight: isRemember ? '600' : '300'
    })
    
    //J'instance des variable global pour mon composant que je pourrais redistribué dans la feuille de styles du module scss lié à mon component
    //Ainsi je permet d'apporter du css in js c'est a dire de pouvoir traiter des valeurs par le js et qu'elle puisse  impacter ma feuille de style
    //C'est une solution  similaire en terme de résultat a ce que  l'on pourrait avoir  avec des packages comme émotion ou  styled-components tout en gardant un css lié à son composant
    //Je pourrais aussi gerer differentes classeName par rapport à un state
    //J'adore la pratique des variables global inherante au composant !
    const styled = {
        remember:{
            '--remember-color': springRemember.valueColor,
            '--remember-weight':springRemember.valueWeight
        } as CSSProperties
    }

    //Function de login via l'api de firebase en renseignant email,password
    async function onConnect(){
        try{
            // Fonction permettant de choisir si on l'utilisateur est persistant pour l'app après la fermeture du navigateur
            await setPersistence(firebaseAuth.auth,isRemember ? browserLocalPersistence : browserSessionPersistence);
            const response =  await signInWithEmailAndPassword (
                firebaseAuth.auth,
                login.email,
                login.password
            )

            if(response?.user){
                navigate('/',{replace:true})
                setAuthorized(true)
            }
            }catch(error:any){
            console.log(error?.code)
            setCodeError(error?.code)
        }
    }
     /*Function qui permet de changer de route
       lastLocation:true me permet de savoir si je suis bien dans le contexte de switch entre signup/signin
       Ce qui me permet de définir si il ya une transition d'animation ou pas
     */
     function goToSignin(){
        navigate('/auth/signin',{state: { lastLocation:true}})
    }


    return(
            <FormSign title={'Content de te voir'} sentence={'veuillez saisir vos identifiants'}>
                <InputForm name={"email"} value={login.email} onChange={onChangeLogin} autoComplete={'off'}  id={"mail"} type={"email"} className={styles["input-form"]} placeholder={"joe@email.com"} label={"Email"} icon={<EmailIcon/>}/>
                <InputForm name={"password"} value={login.password} autoComplete={'new-password'}   onChange={onChangeLogin} id={"pass"}   type={"password"} className={styles["input-form"]}  placeholder={"Enter your password"} label={"Password"} icon={<PasswordIcon/>}/>
               
                <div className={styles["remember-container"]}>
                <CheckBoxToggle onChange={onRemember} checked={isRemember} id={"toggle-account"} icon={<CheckIcon/>} />
                <animated.div style={styled.remember} className={styles["remember-entitled"]}>Se souvenir de moi</animated.div>
                </div>
                <div className={styles["action-login-form"]}>
                <ButtonForm color={"var(--primary-color)"}  hoverColor={"var(--primary-darker)"} onClick={onConnect} text={"Connexion"}/>
                <div className={styles["action-separate-text"]}>Ou</div>
                <ButtonForm color={"var(--secondary-lighter)"} hoverColor={"var(--secondary-color)"} onClick={goToSignin} text={"Inscrivez vous"}/>
                </div>
                <ErrorMessage codeError={codeError}/>
        </FormSign>
    )
}