import { Outlet } from 'react-router-dom';
import HeaderApp from './header-app/HeaderApp';
import styles from './LayoutApp.module.scss';
import MainApp from './main-app/MainApp';
import MenuApp from './menu-app/MenuApp';
import MenuAppMobile from './menu-mobile-app/MenuAppMobile';


export default function LayoutApp(){
    return(
        <div className={styles["layout-container"]}>
            <HeaderApp/>
            <MenuApp/>
            <MainApp>
                <Outlet/>
            </MainApp>
            <MenuAppMobile/>
        </div>
    )
}