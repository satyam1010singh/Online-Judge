import { useState ,useEffect} from "react";
import axios from 'axios'
import ProblemListData from "./Components/Problem_LIst_Data";
import './problemlisttable.css';




function Show_Problem_List()
{
        const [problemlist,setproblemlist] = useState('');
    
    function get_problem_list()
    {
            try {
                axios.get('http://localhost:8004/list')
                .then((res)=>
                {
                    //const data= res.json();
                    console.log(res.data);
                    if(res.data.length>0)
                    {
                        setproblemlist(res.data);
                    }
                })
                .catch(err=>{console.log('error while get')})
            } catch (error) {
                console.log(error)
            }
        }

    useEffect(() =>{
        get_problem_list();
    },[])
        return <>
            <header>
                <h1>Problem list</h1>
                </header>
            <div>
            <table className="content-table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>DESCRIPTION</th>
                    <th>LEVEL</th>
                    <th>LINK</th>
                    </tr>
                </thead>
                <tbody>
                    <ProblemListData problemlist={problemlist}/>
                </tbody>
            </table>
            </div>
           
        </>
}

export{
     Show_Problem_List
     
}