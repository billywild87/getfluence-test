import styles from './Signin.module.scss';
import InputForm from '../../ui/input/InputForm/InputForm';
import { ChangeEvent, useState } from 'react';
import UserIcon from '../../icons/UserIcon';
import EmailIcon from '../../icons/Email.Icon';
import PasswordIcon from '../../icons/PasswordIcon';
import ButtonForm from '../../ui/button/buttonForm/ButtonForm';
import { useNavigate } from 'react-router-dom';
import FormSign from '../../common/form-sign/FormSign';
import ErrorMessage from '../../common/error-message/ErrorMessage';

import { useCreateAccountMutation } from '../../apps/services/authQuery';

import { authAccountType } from './type';



export default function Signin(){
    
    const [createAccount] = useCreateAccountMutation();

    const navigate = useNavigate();
    const [account,setAccount] = useState<authAccountType>({
        pseudo:'',
        email:'',
        password:'',
        confirmPassword:''

    });

    const [codeError,setCodeError] = useState('');

    function onChangeAccount(e:ChangeEvent<HTMLInputElement>){
        if(codeError!==''){
            setCodeError('')
        }
        setAccount({...account,[e.target.name]:e.target.value})
    }



    async function SigninHandler(){
       
        if(account.password !== account.confirmPassword){
            return setCodeError('auth/confirmpassword/not-egal')
            
        }

        try{
           const response = await createAccount({email:account.email,password:account.password,pseudo:account.pseudo}).unwrap()
            if(response){
                navigate('/auth/signinvalidation',{state: { lastLocation:true}})
                
            }
        }
        catch(error:any){
            setCodeError(error?.data.error)
        }
    }

    return(
        <FormSign title={'Creation de compte'} sentence={'Veuillez saisir vos informations'}>
              <InputForm name={"pseudo"} value={account.pseudo} onChange={onChangeAccount} autoComplete={'off'}  id={"pseudo"} type={"text"} className={styles["input-form"]} placeholder={"JoeLeFanFan"} label={"Pseudo"} icon={<UserIcon/>}/>
              <InputForm name={"email"} value={account.email} onChange={onChangeAccount} autoComplete={'off'}  id={"email"} type={"text"} className={styles["input-form"]} placeholder={"Joe@email.com"} label={"Email"} icon={<EmailIcon/>}/>
              <InputForm name={"password"} value={account.password} onChange={onChangeAccount} autoComplete={'off'}  id={"password"} type={"password"} className={styles["input-form"]} placeholder={"Mot de passe"} label={"Mot de passe"} icon={<PasswordIcon/>}/>
              <InputForm name={"confirmPassword"} value={account.confirmPassword} onChange={onChangeAccount} autoComplete={'off'}  id={"confirmPassword"} type={"password"} className={styles["input-form"]} placeholder={"Confirmation de mot passe"} label={"Confirmation de mot passe"} icon={<PasswordIcon/>}/>
              <ButtonForm color={"var(--secondary-color)"} hoverColor={"var(--secondary-lighter)"} onClick={SigninHandler} text={"Inscrivez vous"}/>
             <ErrorMessage codeError={codeError}/>
        </FormSign>
    )
}


