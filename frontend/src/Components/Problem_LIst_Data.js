const ProblemListData = ({problemlist})=>{

    const baseurl = window.location.origin;
        return( <>

            {
                    problemlist && problemlist.map((currProblem)=>{
                            const{problem_description,level,ID,pcode} = currProblem;
                            const hrefval=`${baseurl}/problem/${pcode}`;
                            return(
                                <tr key={ID}>
                                    <td>{ID}</td>
                                    <td>{problem_description}</td>
                                    <td>{level}</td>
                                    <td><a href={hrefval}>CLICK HERE</a></td>
                                </tr>
                            )
                    })
            }


        </>
        )
}

export default ProblemListData;