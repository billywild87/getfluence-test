import React from 'react';

import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import LayoutSign from './layout/layout-sign/LayoutSign';
import Home from './features/home/Home';
import UserProfil from './features/user-profil/UserProfil';
import NotFound from './features/not-found/NotFound';
import PrivateRoute from './routing/private-route/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Event from './features/event/Event';
import LayoutApp from './layout/layout-app/LayoutApp';

function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
      {/*<Route path='*' element={<Navigate  to="/404"/>}/>*/}

        <Route path='/404' element={<NotFound/>}/>
 
        <Route element={<LayoutSign/>} path='/auth/*'/>
        <Route element={<PrivateRoute><LayoutApp/></PrivateRoute>}>
        <Route element={<Home/>} path={'/'}></Route>
        <Route element={<UserProfil/>} path='/profil' />
        <Route element={<Event/>} path='/event' />
        </Route>
        
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
