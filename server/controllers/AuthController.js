import express from "express";
import {userExistWithEmailOrPseudo } from "../services/authService/existValue.js";
import { createUser } from "../services/authService/createValue.js";
import firebaseAdmin from "../config-firebase/firebase-services.js";
import pool from "../db.js";
import dotenv from "dotenv";
import CryptoJS from 'crypto-js';
dotenv.config();
const AuthControllers = express.Router();


AuthControllers.post("/create", async (req, res) => {
  const {email,password,pseudo} = req.body;

  // Test ici de l'email / du pseudo et du password si ils sont biens existants
  if (!email || !pseudo || !password){
    return res.status(400).json({
      error:
        `auth/missing-${!email?'email':!pseudo?'pseudo':'password'}`
    });
  }

  try {

      // On test si l'email ou l'user n'existe pas en base de donnée
      const testUserExist = await userExistWithEmailOrPseudo(email,pseudo)
      if(testUserExist){
        return res.status(400).json({
          error:
            `auth/exist-${testUserExist}`
        });
  }


    // Création du auth firebase 
    const newFirebaseUser = await firebaseAdmin.auth.createUser({
      email,
      password
    })

   
    // Si le compte firebase auth est créé alors nous pouvons enregistrer les informations de l'utilisateur 
    if(newFirebaseUser){
      const newUser = await createUser(newFirebaseUser.uid,email,pseudo)
      if(newUser){
      return res
      .status(200)
      .json({ firebaseUser: newFirebaseUser });
      }
    }

  }

  // On capte ici les erreurs de firebase via errorInfo pour qu'elle soit traité par le front
  catch(error){
    if(error.hasOwnProperty('errorInfo')){
    return res
        .status(400)
        .json({ error:error.code});
    }
    else{
      return res.status(500).json({ error: "auth/create-failed" });
    }
  }
});

  export default AuthControllers