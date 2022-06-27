
import { useLocation,Navigate } from 'react-router-dom'
import { privateRouteType } from './type'; 
import { useAuth } from '../../context/AuthContext';


const PrivateRoute = ({children}:privateRouteType) => {
    const  {authorized} = useAuth();
    const location = useLocation();
    if(!authorized){
        return <Navigate to="/auth/signup" replace state={{from:location}} />
    }

    return children
}

export default PrivateRoute;