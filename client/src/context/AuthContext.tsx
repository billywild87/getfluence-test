import { createContext,useState,useEffect,useContext } from "react";
import firebaseAuth from "../services/firebase";
import { authProviderType } from "./type";


interface AuthContextInterface {
    authorized?:boolean,
    setAuthorized:React.Dispatch<React.SetStateAction<boolean>>
}



const AuthContext = createContext({} as AuthContextInterface);


export function  AuthProvider({children}:authProviderType){

    const [loading,setLoading] = useState<boolean>(true);
    const [authorized,setAuthorized] = useState<boolean>(false);

    // Observateur lié au au changement de l'etat de connexion de firebase
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const authListener = () =>{
        firebaseAuth.auth.onAuthStateChanged(async(user)=>{
         
          if(!user){
            setAuthorized(false);
                
            }else{
                setAuthorized(true)
            }
            setLoading(false)
           
  
            
        })
    }
  

    useEffect(()=>{
       authListener();
    },[authListener])
    

    const contextData = {
        setAuthorized:setAuthorized,
        authorized:authorized,
    }

    return(
        <AuthContext.Provider value={contextData} > 
            {loading ? null : children}
        </AuthContext.Provider>
    )

}

function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
      throw new Error('useAuth doit être utilisé dans le AuthProvider')
    }
    return context
  }

export {AuthContext,useAuth}