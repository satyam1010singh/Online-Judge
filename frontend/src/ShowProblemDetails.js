import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import './ProblemDetails.css';

function ShowProblemDetails() {
    const { pcode } = useParams();
    const [problemdetails, setProblem_details] = useState('')
    const [inputcode, setinputcode] = useState('')
    const [custominput, setcustominput] = useState('')
    const [customoutput, setcustomoutput] = useState('')
    function getProblemDetails() {
        try {
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
                inputcode: inputcode,
                custominput: problemdetails.testcases[i]
            }

            try {
                const coderesult = await axios.post('http://localhost:8004/submit', inputdetails);
                console.log(coderesult);
                if (coderesult.data !== problemdetails.outputcases[i]) {
                    alert(`wrong output on test case ${i}`);
                    return;
                }
                //alert("success");


            } catch (error) {
                console.log(error)
            }
        }
        alert("success");
    };
    const HandleCustomOutput = async () => {
        const inputdetails = {
            language: 'cpp',
            inputcode: inputcode,
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
                    <h4 class="text-4xl font-bold dark:text-white">Problem</h4>
                    <p class="my-4 text-lg text-gray-500">{problemdetails.header}.</p>
                </div>
                <div className="">  
                <h2>Description</h2>               
                    <div className="  w-1/2 p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        <div className="font-medium break-all">{problemdetails.description}</div>
                    </div>

                </div>
            </div>
            <div className="absolute top-0 right-0 space-y-10">
                <h1>code</h1>

                <textarea className=" resize-none border-2 border-violet-800 focus:border-violet-800  " cols={60} rows={20} placeholder="Write your code here...." value={inputcode} onChange={(e) => { setinputcode(e.target.value); }}></textarea>
                <div>
                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={HandlecodeSubmit}> Submit </button>
                </div>
                <div>
                    <p className="pl-4 bg-orange-100 border-3 rounded-lg border-yellow-500 w-50">Custom Input And Output</p>
                    <textarea placeholder="Input goes here...." className="border-2" rows='5' cols='20' value={custominput} onChange={(e) => { setcustominput(e.target.value); }}></textarea>
                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={HandleCustomOutput}>Run</button>
                    <textarea className="border-2" rows='5' cols='20' value={customoutput.data}></textarea>

                </div>
            </div>



        </div>
    )

}

export {
    ShowProblemDetails
}