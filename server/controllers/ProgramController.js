import express, { json } from "express";
import authenticate from "../middleware/authenticate.js";
import { addNewProgram, AllProgram } from "../services/programService/programService.js";


const ProgramControllers = express.Router(); 



ProgramControllers.post("/create",authenticate , async (req, res) => {
    
    try{
    const newProgram = await addNewProgram(req.id_user,new Date(req.body.date))
        if(newProgram){
            return res.json({
                response:'succes'
            })
        }
}catch(error){
    res.status(400).json({
        error:
          `Une erreur est survenue`
      });
}
})



ProgramControllers.get("/all",authenticate , async (req, res) => {
    
    try{
    const progamList = await AllProgram();
    
    res.json({
        list_program:progamList
    })

    }catch(error){
        console.log(error)
    }
})


export default ProgramControllers