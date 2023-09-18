import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup(){
    const history=useNavigate();
    const [name,setname] = useState();
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    const Signupclick = (e) => {
        e.preventDefault();
        try {
             axios.post('http://localhost:8004/signup',{email,password})
            .then((res)=>{
                if(res.data==="exist")
                {
                    alert("user already exist")
                   
                }
               /* else if(res.data==="does not exist")
                {
                    history("/home",{state:{id:email}})
                }*/
            })
            .catch(e=>{
                alert("wrong details")
            })
        } catch (error) {
            console.log(error);
        }
        //axios.post('http://localhost:8004/registers',{name,email,password})
       // .then(result => console.log(result))
        //.catch(err => console.log(err))

    }

    /*return(
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">   
                <div className="bg-white p-3 rounded w-25">   
                <h2> Register</h2>
                <form onSubmit={handleSubmit}>  
                    <div className="mb-3">   
                    <label for="name"> 
                    <strong>Name</strong>
                    </label>
                    <input
                    id="name"
                    type="text"
                    placeholder="Enter the Name"
                    autoComplete="off"
                    name="name"
                    className="form-control rounded-0"
                    onChange={(e) => setname(e.target.value)}
                    />                   
                    </div>
                  
                    <div className="mb-3">   
                    <label for="email"> 
                    <strong>Email</strong>
                    </label>
                    <input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setemail(e.target.value)}
                    />                                    
                  </div>
                    <div className="mb-3">   
                    <label for="password"> 
                    <strong>Password</strong>
                    </label>
                    <input
                    id="password"
                    type="password"
                    placeholder="Enter the Password"
                    autoComplete="off"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e) => setpassword(e.target.value)}
                    />                   
                    </div>
                    </form>
                    <button type="submit" className="btn btn-success w-100 rounded-0"> 
                    Register  
                    </button>
                    <p> Already have an account</p>
                    <Link to="/login"className="already-account-btn">Login</Link>
                
                </div>
            </div>
    );*/
    return (
        <div className="Signup">
            <h1>Signup</h1>
            <form action="POST">
               
                <input type="email" onChange={(e) => { setemail(e.target.value) }} placeholder="Email" name="" id=""/>  
                <input type="password" onChange={(e) => { setpassword(e.target.value) }} placeholder="Password" name="" id=""/>  

                <input type="submit" onClick={Signupclick}/>
            </form>

            <br />
            <p>or</p>
            <br />
            <Link to="/login">Login Page</Link>
        </div>
    );


}

export default Signup;