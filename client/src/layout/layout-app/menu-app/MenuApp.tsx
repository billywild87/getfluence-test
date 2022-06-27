import { useNavigate } from 'react-router-dom';
import Logo from '../../../common/logo/Logo';
import CalendarIcon from '../../../icons/CalendarIcon';
import HomeIcon from '../../../icons/HomeIcon';
import LeaveIcon from '../../../icons/LeaveIcon';
import UserIcon from '../../../icons/UserIcon';
import ItemMenu from './item-menu/ItemMenu';
import styles from './MenuApp.module.scss';
import { signOut } from 'firebase/auth';
import firebaseService from '../../../services/firebase';

export default function MenuApp(){

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
        <div className={styles['menu-app-container']}>
            <div className={styles['logo-container']}>
                <Logo className={styles["logo-menu"]}/>
            </div>
            <div className={styles["nav-wrapper"]}>
            <nav className={styles["nav-container"]}>
                <ItemMenu onAction={goToPage} type='nav' className={styles["nav-item"]} text="Home" path={'/'} icon={<HomeIcon/>}/>
                <ItemMenu onAction={goToPage} type='nav' className={styles["nav-item"]} text="Profil" path={'/profil'} icon={<UserIcon/>}/>
                <ItemMenu onAction={goToPage} type='nav' className={styles["nav-item"]} text="Event" path={'/event'} icon={<CalendarIcon/>}/>
              
            </nav>
            <ItemMenu onAction={onLogOut} type='action' className={styles["nav-item"]} text="Déconnexion" icon={<LeaveIcon/>}/>
            </div>
        </div>
    )
}