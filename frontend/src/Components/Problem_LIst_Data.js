const ProblemListData = ({problemlist})=>{

    const baseurl = window.location.origin;
        return( <>

            {
                    problemlist && problemlist.map((currProblem)=>{
                            const{problem_description,level,ID,pcode} = currProblem;
                            const hrefval=`${baseurl}/problem/${pcode}`;
                            return(
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={ID}>
                                    <td class="px-6 py-4">{ID}</td>
                                    <td class="px-6 py-4">{problem_description}</td>
                                    <td class="px-6 py-4">{level}</td>
                                    <td class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><a href={hrefval}>CLICK HERE</a></td>
                                </tr>
                            )
                    })
            }


        </>
        )
}

export default ProblemListData;