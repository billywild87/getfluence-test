/* @ts-ignore */
import styles from './LayoutSign.module.scss';
import { useLocation,Routes,Route,useNavigationType,Navigate} from 'react-router-dom'
import {animated,useTransition} from 'react-spring'
import SignUp from '../../features/signup/Signup';
import Signin from '../../features/signin/Signin';
import { usePrevLocation } from '../../hooks/usePrevLocation';
import Logo from '../../common/logo/Logo';
import NotFound from '../../features/not-found/NotFound';
import SignValid from '../../features/sign-valid/SignValid';

export default function LayoutSign(){

    const location = useLocation();
    const prevLocation = usePrevLocation(location)
    const navigateType = useNavigationType();
  
    const transitions = useTransition(location, {
        from:  { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0,transform: 'translate3d(-50%,0,0)' },
      })

      console.log(prevLocation);
    return(
        <div className={styles["layout-sign-container"]}>
            <div className={styles["left-side-sign"]}>
                <div className={styles["left-side-container"]}>
                    <Logo className={styles["logo-company"]}/>
                </div>
            </div>
            <div className={styles["right-side-sign"]}>
            {transitions((props, item) => {
                let style;
                if(prevLocation === undefined) style={}
                else style = props;
                   
               
               return <animated.div
                    className={styles['sign-page']}
                    style={style}>
                        <Routes location={item}>
                            <Route element={<SignUp/>} path="signup"/>
                            <Route element={<Signin/>} path="signin"/>
                            <Route element={<SignValid/>} path='signinvalidation'/>
                            <Route element={<Navigate to='/404'><NotFound/></Navigate>} path={'*'} />
                            
                       </Routes>
                </animated.div>
})}
           
             
            </div>
        </div>
    )
}