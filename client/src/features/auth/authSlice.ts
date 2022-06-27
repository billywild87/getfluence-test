import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { authType } from "./type";


/*
Je n'utiliserais pas se slice mais c'etais seulement pour montrer l'utilisation d'un acess token au sein de redux
avec la fonction setTokenAccess que j'utliserais a chaque fois que je me connect ou que le token a été refresh

*/


export const authSlice = createSlice({
    name:'auth',
    initialState:{ auth_token_access: null } as authType,
    reducers:{
        setTokenAccess:(
                state,
                { payload }: PayloadAction<string>
            )=>{
                state.auth_token_access = payload
            }
        },
     
    })

    export const { setTokenAccess } = authSlice.actions






export default authSlice.reducer

