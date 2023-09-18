import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup';
import Homepage from './homepage';

import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Loginpage from './loginpage';
import Show_Problem_List from './problem_list';

function App() {
 /* const [users,setusers] = useState([]);
  useEffect(()=>{
      axios.get('http://localhost:8005/api/problemlist/')
      .then(users => setusers(users.data))
      .catch(err => console.log(err))
  }, [])*/
  return (
    /*<div classname="container">
      <table className='table'> 
        <thead>
          <tr>
            <th>  
              ID
            </th>
            <th>  
              level
            </th>
          </tr>
        </thead>
        <tbody> 
          {
            users.map(user =>{
              return <tr>  
                <td>  {user.problem_id}</td>
                <td>  {user.level}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>*/
    <div>
      
    
    <BrowserRouter>
    <Routes>
      <Route path='/problemlists' element={<Show_Problem_List/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/home' element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
