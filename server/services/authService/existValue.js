import pool from "../../db.js";





//Test PseudoExist
export async function pseudoExist(pseudo){
    var query = {
    text:'SELECT users.pseudo FROM users where users.pseudo = $1',
    values:[pseudo]
    }

    const pseudoExist = await pool.query(query);

    if(pseudoExist.rows[0]) return true
    
    return false
}

//Test Email
export async function emailExist(email){
    var query = {
    text:'SELECT users.email FROM users where users.email = $1',
    values:[email]
    }

    const emailsExist = await pool.query(query);

    if(emailsExist.rows[0]) return true
     
    return false
}


//Test Email and speudo

export async function userExistWithEmailOrPseudo(email,pseudo){

    var query = {
        text:'SELECT users.email, users.pseudo FROM USERS where users.email = $1 OR users.pseudo = $2',
        values:[email,pseudo]
    }

   

    const user = await pool.query(query);

    if(user.rows[0]){
       
        if(user.rows[0].email === email){
            return 'email'
        }else{
            return 'pseudo'
        }
    }
    return false
    


}