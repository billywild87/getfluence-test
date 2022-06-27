import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../services/firebase';
export const programApi = createApi({
    reducerPath: 'program',
    tagTypes: ["programs"],
    baseQuery: fetchBaseQuery({
       baseUrl: process.env.REACT_APP_BASE_API,
       prepareHeaders: async (headers) => {
    
        const token = await getToken(true);
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        return headers
      },
    
    }),
    endpoints: (builder) => ({
      createProgram: builder.mutation<any,{date:string}>({
        query: (body) =>{ 
        return{
        url:'/program/create',
        method:'POST',
        body
    }
        },
        invalidatesTags: ['programs']   
        }),
        getPrograms: builder.query<any,void>({
          query: () =>{ 
          return{
          url:'/program/all',
          method:'GET',
        
      }
          },
          providesTags:['programs']  
          }),
    }),
  })

  
export const {useCreateProgramMutation,useGetProgramsQuery} = programApi;
