const ProblemDetailsData = ({problemdetail})=>{
        return (
            <>
            {
            problemdetail && problemdetail.map((currproblemdetails)=>{
                const{pcode,header,description,input,output} = currproblemdetails;
                
                return(
                    
                    <h1>{header}</h1>
                        )

            })
}
        </> 
        )
}

export default ProblemDetailsData;