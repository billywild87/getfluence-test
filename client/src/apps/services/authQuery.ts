import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'auth',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
       baseUrl: process.env.REACT_APP_BASE_API,
    
    }),
    endpoints: (builder) => ({
      createAccount: builder.mutation<any,{email:string,password:string,pseudo:string}>({
        query: (body) =>{ 
        return{
        url:'/auth/create',
        method:'POST',
        body
    }
        }   
        }),
    }),
  })

  
export const {useCreateAccountMutation} = authApi;
