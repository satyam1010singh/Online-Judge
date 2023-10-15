import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup(){
    const baseurl = window.location.origin;
    const linktologin = `${baseurl}/login`;
    const history=useNavigate();
    const [name,setname] = useState();
    const [email,setemail] = useState('');
    const [TandC,setTandC] = useState('');
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
                else if(res.data==="does not exist")
                {
                    
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
        <div className="Signup">
            <h1>Signup</h1>
            
            <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          CodeNest   
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={(e) => { setemail(e.target.value) }} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={(e) => { setpassword(e.target.value) }} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>                 
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" onChange={(e) => { setTandC(e.target.checked) }} aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" disabled={!TandC} onClick={Signupclick} class="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-primary-700 dark:focus:ring-cyan-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href={linktologin} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

            













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