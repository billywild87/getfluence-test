import CalendarIcon from '../../../icons/CalendarIcon';
import HomeIcon from '../../../icons/HomeIcon';
import LeaveIcon from '../../../icons/LeaveIcon';
import UserIcon from '../../../icons/UserIcon';
import ItemMenuAppMobile from './item-menu-app-mobile/ItemMenuAppMobile';
import styles from './MenuAppMobile.module.scss';
import { useNavigate } from 'react-router-dom';
import firebaseService from '../../../services/firebase';
import { signOut } from 'firebase/auth';

export default function MenuAppMobile(){
    const navigate = useNavigate();

    function goToPage(path:string){
        navigate(path)
    }
    function onLogOut(action:string){
        if(action === "leave"){
        signOut(firebaseService.auth)
        .catch((error) => {
            // An error happened.
          });
        }  
       }
    return(
        
                <nav className={styles["menu-app-mobile-container"]}>
                <ItemMenuAppMobile onAction={goToPage} type='nav' className={styles["nav-item"]} text="Home" path={'/'} icon={<HomeIcon/>}/>
                <ItemMenuAppMobile onAction={goToPage} type='nav' className={styles["nav-item"]} text="Profil" path={'/profil'} icon={<UserIcon/>}/>
                <ItemMenuAppMobile onAction={goToPage} type='nav' className={styles["nav-item"]} text="Event" path={'/event'} icon={<CalendarIcon/>}/>
                <ItemMenuAppMobile onAction={onLogOut} type='action' className={styles["nav-item"]} text="Déconnexion" icon={<LeaveIcon/>}/>
            </nav>
    
    )
}