import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IProfile, { userProfileType } from '../../features/user-profil/type';
import { getToken } from  '../../services/firebase'


export const userApi = createApi({
    reducerPath: 'user',
    tagTypes: ['Profil'],
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
        getProfilUser: builder.query<IProfile,void>({
          query: () =>{ 
          return{
          url:'/user/profil/me',
              }
          },
          providesTags:['Profil']   
      }),
      updateProfilUser: builder.mutation<userProfileType,Partial<userProfileType>>({
        query: (body) =>{ 
        return{
        url:'/user/profil/update',
        method:'PUT',
        body
            }
        },
        invalidatesTags: ['Profil'],   
    }),
  
      }),

  })

  
export const {useGetProfilUserQuery,useUpdateProfilUserMutation} = userApi;
