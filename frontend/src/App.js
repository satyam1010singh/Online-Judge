import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup';
import Login from './Components/Login';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {Show_Problem_List} from './problem_list';
import { ShowProblemDetails } from './ShowProblemDetails';
import Homepage from './homepage';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavigationBar/>}>
      <Route index element={<Homepage />}/>
      <Route path='/problem/:pcode' element={<ShowProblemDetails/>}/>
      <Route path='/problemlists' element={<Show_Problem_List/>}/>    
      </Route>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
