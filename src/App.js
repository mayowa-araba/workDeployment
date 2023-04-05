import React,{createContext, useEffect, useState} from 'react';
import Home from "./page/Index"
import SignIn from './page/SignIn';
import About from "./page/About";
import SignUp from './page/SignUp';
import Dashboard from './Instructor/component/DashB';
import AdminNav from './components/admin/AdminNav';
import AdminLayout from './components/admin/AdminLayout'
import {Route, BrowserRouter,Routes} from 'react-router-dom';

import axios from 'axios';





const App=()=> {
  
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>

      <Route exact path="/About" element={<About />} />

      <Route exact path='/SignIn' element={<SignIn/>}/>
      <Route exact path='/SignUp' element={<SignUp/>}/>
      <Route exact path='/AdminNav' element={<AdminNav/>}/>
      <Route exact path='DashB/*' element={<Dashboard/>}/>
    </Routes>      
    </BrowserRouter>
    
  );
}

export default App;

