import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup';
import Homepage from './homepage';
import Navbar from './Components/Navbar';

import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Loginpage from './loginpage';
import {Show_Problem_List} from './problem_list';
import { ShowProblemDetails } from './ShowProblemDetails';

function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
      <Route path='/problem/:pcode' element={<ShowProblemDetails/>}></Route>
      <Route path='/problemlists' element={<Show_Problem_List/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/home' element={<Navbar/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
