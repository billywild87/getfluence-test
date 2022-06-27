import pool from "../../db.js";
import createError from "http-errors";





export async function createUser(id_firebase,email,pseudo){
    console.log(id_firebase,email,pseudo)
    const userQuery={
        text: `INSERT INTO users (id_firebase,email,pseudo,avatar)
               VALUES ($1,$2,$3,'men_hypster') RETURNING *`,
        values: [id_firebase,email,pseudo]

    }

    try{
    const user = await pool.query(userQuery)
    return user.rows[0];
    }catch(error){
        console.log(error)
    }
    

   
}