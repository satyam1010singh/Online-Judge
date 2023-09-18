import React from "react";
import { useState } from "react";

import {useNavigate ,Link } from "react-router-dom";
import axios from "axios";

function Loginpage() {

    const history=useNavigate();
    const [email,setemail] = useState();
    const [password,setpassword] = useState();

    async function loginclick(e){
        e.preventDefault();
        try {
            
            await axios.post('http://localhost:8004/login',{email,password})
            .then((res)=>{
                if(res.data==="exist")
                {
                    alert("yes")
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="does not exist")
                {
                    alert("user does not exist")
                }
            })
            .catch(e=>{
                alert("wrong details")
            })

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="login">
            <h1>login</h1>
            <form action="POST">
                <input type="email" onChange={(e) => { setemail(e.target.value) }} placeholder="Email" name="" id=""/>  
                <input type="password" onChange={(e) => { setpassword(e.target.value) }} placeholder="Password" name="" id=""/>  

                <input type="submit" onClick={loginclick}/>
            </form>

            <br />
            <p>or</p>
            <br />
            <Link to="/register">Signup Page</Link>
        </div>
    );
}

export default Loginpage;