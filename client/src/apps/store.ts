import { configureStore} from '@reduxjs/toolkit'

import { userApi } from './services/userQuery';
import { authApi } from './services/authQuery';
import { programApi } from './services/programQuery';


export const store = configureStore({
  reducer: {
    // ICI VOICI MON STORE
    //auth:authSlice,
    [userApi.reducerPath]:userApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
    [programApi.reducerPath]:programApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware,userApi.middleware,programApi.middleware),
  
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;