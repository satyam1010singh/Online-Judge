import { useParams,useNavigate } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import CodeEditor from "./codeEditor";

function ShowProblemDetails() {
    const navigate = useNavigate();
    const isloggedin = localStorage.getItem("token");
    const { pcode } = useParams();
    const [verdict,setverdict] = useState('')
    const [problemdetails, setProblem_details] = useState('')
    const [code, setCode] = useState(`#include <iostream>\nusing namespace std;\nint main()\n{\n  cout << "Hello World";\n  return 0;\n}`);
    const [custominput, setcustominput] = useState('')
    const [customoutput, setcustomoutput] = useState('')

    const handleCodeChange = (newCode) => {
        setCode(newCode);
      };
 
    function getProblemDetails() {
        try {
            if(!isloggedin)
            {
                    navigate("/login");
            }
            
            axios.get('http://localhost:8004/problemdetails', {
                params:
                {
                    pcode
                }
            })
                .then(res => {
                    console.log(res);
                    setProblem_details(res.data);
                })
                .catch(e => {
                    alert("show problem details axios failed");
                })
        } catch (error) {

        }
    }
    
    
    useEffect(() => {
        getProblemDetails();
    }, [])
    const HandlecodeSubmit = async () => {
        const totaltestcases = problemdetails.testcases.length;
        for (let i = 0; i < totaltestcases; i++) {
            const inputdetails = {
                language: 'cpp',
                inputcode: code,
                custominput: problemdetails.testcases[i]
            }

            try {
                const coderesult = await axios.post('http://localhost:8004/submit', inputdetails);
                console.log(coderesult);
                if (coderesult.data !== problemdetails.outputcases[i]) {
                    setverdict(`wrong output on test case ${i}`)               
                    return;
                }
            } catch (error) {
                console.log(error)
            }
        }
        setverdict("all test cases passed")
    };
    const HandleCustomOutput = async () => {
        const inputdetails = {
            language: 'cpp',
            inputcode: code,
            custominput: custominput
        }

        try {
            const coderesult = await axios.post('http://localhost:8004/submit', inputdetails);
            console.log(coderesult);
            setcustomoutput(coderesult);


        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className="relative">
            <div className="">
                <div className="">
                    <h2>Problem</h2>
                    <div className="  w-1/3 p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        <div className="font-medium break-all">{problemdetails.header}</div>
                    </div>
                </div>
                <div className="">  
                <h2>Description</h2>               
                    <div className="  w-1/3 p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        <div className="font-medium break-all">{problemdetails.description}</div>
                    </div>

                </div>
            </div>

            <div className="">
                <h1>code</h1>
                <CodeEditor code={code} onChange={handleCodeChange} />
                <div>
                      <label htmlFor="verdict"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verdict</label>
                      <textarea readOnly={true} placeholder="Verdict" className="border-2" rows='2' cols='60' value={verdict} ></textarea>

                  </div>
                
                <div>
                    <p className="pl-4 bg-gray-100 border-3 rounded-lg border-gray-500 h-10 w-50">Custom Input And Output</p>
                    <textarea placeholder="Input goes here...." className="border-2" rows='5' cols='20' value={custominput} onChange={(e) => { setcustominput(e.target.value); }}></textarea>
                    <textarea placeholder="Output goes here...."className="border-2" rows='5' cols='20' value={customoutput.data}></textarea>

                </div>
                <div>
                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={HandleCustomOutput}>Run</button>
                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={HandlecodeSubmit}> Submit </button>
                </div>
            </div>



        </div>
    )

}

export {ShowProblemDetails
}
