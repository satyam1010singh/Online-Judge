import { useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import ProblemDetailsData from "./Components/Problem_Details_Data";
import './ProblemDetails.css';

function ShowProblemDetails()
    {
        const {pcode} = useParams();
        const [problemdetails,setProblem_details] = useState('')
        const [inputcode,setinputcode] = useState('')
        const [custominput,setcustominput] = useState('')
        const [customoutput,setcustomoutput] = useState('')
        function getProblemDetails()
        {
            try {
                axios.get('http://localhost:8004/problemdetails',{params:
            {
                pcode
            }})
                .then(res=>{
                    console.log(res);
                    setProblem_details(res.data);
                })
                .catch(e=>{
                    alert("show problem details axios failed");
                })
            } catch (error) {
                
            }
        }
        useEffect(()=>{
            getProblemDetails();
        },[])
        const HandlecodeSubmit = async()=>
        {
            const totaltestcases = problemdetails.testcases.length;
            for(let i =0;i<totaltestcases;i++)
            {
                const inputdetails={
                    language:'cpp',
                    inputcode:inputcode,
                    custominput:problemdetails.testcases[i]
                }
    
                try {
                    const coderesult = await axios.post('http://localhost:8004/submit',inputdetails);
                    console.log(coderesult);                                  
                    if(coderesult.data!==problemdetails.outputcases[i])
                    {
                    alert(`wrong output on test case ${i}` );
                    return;
                    }
                    //alert("success");
    
                    
                } catch (error) {
                    console.log(error)
                }
            }
            alert("success");
        };
        const HandleCustomOutput = async()=>
        {
            const inputdetails={
                language:'cpp',
                inputcode:inputcode,
                custominput:custominput
            }

            try {
                const coderesult = await axios.post('http://localhost:8004/submit',inputdetails);
                console.log(coderesult);
                setcustomoutput(coderesult);

                
            } catch (error) {
                console.log(error)
            }
        };
        

            //const {pcode} = useParams();
            return (
                <div className="container">
            <div className="p-header">
            {problemdetails.header} 
            </div>
            <div className="p-description">
                {problemdetails.description}
            </div>

            <div className="codecontainer">
                <h1>code</h1>
                
                <textarea rows='20' cols='80' value={inputcode} onChange={(e)=>{setinputcode(e.target.value);}}></textarea>
                <button onClick={HandlecodeSubmit}> Submit </button>
                <textarea rows='5' cols='20' value={custominput} onChange={(e)=>{setcustominput(e.target.value);}}></textarea>
                <button onClick={HandleCustomOutput}>OutPut</button>
                <textarea rows='5' cols='20' value={customoutput.data}></textarea>

            </div>
            
            
            <h1><ProblemDetailsData problemdetails={problemdetails}/></h1>
            </div>
            )
            
    }

export {
    ShowProblemDetails
}