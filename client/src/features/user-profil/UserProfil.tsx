import styles from './UserProfil.module.scss';
import InputSimple from '../../ui/input/input-simple/InputSimple';
import ButtonSimple from '../../ui/button/buttton-simple/ButtonSimple';

import { useEffect,useState,ChangeEvent } from 'react';

import { userProfileType } from './type';
import BlockPage from '../../common/block-page/BlockPage';
import SelectSimple from '../../ui/select/SelectSimple';

import { ObjectIsEqual } from '../../utils/compareObject';
import { useGetProfilUserQuery, useUpdateProfilUserMutation } from '../../apps/services/userQuery';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UserProfil(){
  

   const {isError:isFetchErrror,isLoading,data} = useGetProfilUserQuery();
   const [updateProfil,{isSuccess,isError:isErrorUpdate}] = useUpdateProfilUserMutation();
    const [userProfil,setUserProfil] = useState<userProfileType>({
        pseudo:'',
        email:'',
        country:'',
        fonction:''
})

    const [country,setCountry] = useState([])
    

    // ON remplis les champs par les valeurs agréé à l'utilisateur
    useEffect(()=>{
        if(!isFetchErrror && !isLoading && data){
            setUserProfil(data.profil)
            setCountry(data.list_country)
        }   
    },[data,isFetchErrror,isLoading])
    


 
    function hanlderChange(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        console.log(e.target.value)
        setUserProfil((prevUserProfil:userProfileType)=>{ return{...prevUserProfil,[e.target.name]:e.target.value}})
    }

    //Function qui va update le compte de l'utilisateur on compare les donnée que l'on veut envoyée par rapport à celle que l'on a
    function onSave(){
        if(data){
        const myUpdateProfil = ObjectIsEqual(userProfil,data.profil)
        
        if(myUpdateProfil && typeof myUpdateProfil  !=="boolean" ){
            updateProfil(myUpdateProfil)
        }

        }
       
    }

    useEffect(()=>{
        if(isSuccess){
            toast.success("Votre profil est à jours");
        }
    },[isSuccess])

    return(
        <BlockPage isError={isFetchErrror} isLoading={isLoading}>
            <div className={styles["profil-form"]}>
                <InputSimple value={userProfil.pseudo} className={styles["input-profil"]} label={'Pseudonyme'} onChange={hanlderChange} id='pseudo' name={'pseudo'} placeholder='Entrez votre pseudo' type={'text'}  />
                <InputSimple disabled value={userProfil.email} className={styles["input-profil"]} label={'Email'} onChange={hanlderChange} id='email' placeholder='Entrez votre email' name={'email'} type={'text'}  />
                <InputSimple value={userProfil.fonction} className={styles["input-profil"]} label={'fonction'} onChange={hanlderChange} id='fonction' placeholder='Entrez votre fonction' name={'fonction'} type={'text'}  />
                {country.length > 0 && <SelectSimple className={styles["select-profil"]} value={userProfil.country} name='country' id="country" label='Pays' sentence={'Selectionner un pays'} onChange={hanlderChange} list={country}  />}
                
                <ButtonSimple onClick={onSave} className={styles["save-profil"]} text='Save' type='primary'/>
                <ToastContainer />
            </div>
        </BlockPage>

        )
    
}