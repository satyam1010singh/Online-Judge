import { useState ,useEffect} from "react";
import axios from 'axios'
import ProblemListData from "./Components/Problem_LIst_Data";





function Show_Problem_List()
{
        const [problemlist,setproblemlist] = useState('');
    
    function get_problem_list()
    {
            try {
                axios.get(`${process.env.REACT_APP_SERVER_PATH}/list`)
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
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" class="px-6 py-3">ID</th>
                    <th scope="col" class="px-6 py-3">DESCRIPTION</th>
                    <th scope="col" class="px-6 py-3">LEVEL</th>
                    <th scope="col" class="px-6 py-3">LINK</th>
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