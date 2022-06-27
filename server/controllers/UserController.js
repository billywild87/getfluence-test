import express from "express";
import authenticate from "../middleware/authenticate.js";
import { getAllCountryByName } from "../services/externService/country.js";
import {getInfoUser,updateProfil} from '../services/userService/userProfileService.js';
import { pseudoExist } from "../services/authService/existValue.js";

const UserController = express.Router();


UserController.get("/profil/me", authenticate, async (req, res) => {

    try{
        const infoUser = await getInfoUser(req.id_user);
        const listCountrys = await getAllCountryByName();

        return res.json({profil:infoUser,list_country:listCountrys})
    }
    catch(error){
        res.sendStatus(401)
    }
    

  

});

UserController.put("/profil/update", authenticate, async (req, res) => {
    let testPseudo = false;
    try{
        
        // On test si le pseudo existe
       // if(req.body.hasOwnProperty('pseudo')) testPseudo = await pseudoExist(req.body.pseudo)    
        //else res.status(400).json({ error:'Pseudo existant'});
        
        if(!testPseudo){
            const newProfil =  await updateProfil(req.id_user,req.body);
        
            if(newProfil){
                res.send({response:'update succes'})
                }
            }
    }
    
    catch(error){
        res.sendStatus(401)
    }
  

});


export default UserController