import pool from "../../db.js";


export async function addNewProgram(id_user,date){
    const query = {
        text:'INSERT INTO program (id_user_program,date_program) VALUES($1,$2) RETURNING *',
        values:[id_user,date]
    }
    try{
    const program = await pool.query(query)

    if(program.rows[0]){
        return program.rows[0]
    }
    }catch(error){
        console.log(error)
    }
    
}


export async function AllProgram(){
    const query = {
        text:`SELECT p.id_user_program,p.date_program,u.pseudo,u.avatar FROM PROGRAM p
              INNER JOIN USERS u  ON p.id_user_program = u.id_user 
              ORDER BY p.date_program desc    
        `
    }

    const progamList = await pool.query(query)

    return progamList.rows
}