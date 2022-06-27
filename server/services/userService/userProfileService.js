import pool from "../../db.js";
import { updateLine } from "../../utils/updateLine.js";


export async function getInfoUser(id_user){
    const query = {
        text:`SELECT 
             u.pseudo,
             u.email,
             CASE WHEN u.country IS NULL THEN '' ELSE u.country END as  country,
             CASE WHEN u.fonction IS NULL THEN '' ELSE u.fonction END as fonction
             FROM users u 
             WHERE u.id_user = $1
             `,
             values:[id_user]
       
    }
    try{
    const user = await pool.query(query)
    

    
    if(user.rows[0]){
        return user.rows[0];
    }
    return false

    }catch(error){
       console.log(error)
    }
}


export async function updateProfil(id_user,body){
    
    const query = {
        text: `${updateLine('USERS','id_user',body,id_user)} 
        RETURNING  pseudo,email,fonction,country `,
        values:Object.keys(body).map((key,i)=>{
            return body[key] 
        })
      }
    try{
    const updatingUser = await pool.query(query)
        if(updatingUser.rows[0]){
            return updatingUser.rows[0]
        }
    }catch(error){
        console.log(error)
    }
}   