import * as fs from 'fs';
import  path from 'path';
import { fileURLToPath } from 'url';
import * as child from 'child_process';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const diroutput = path.join(__dirname,'output');

if(!fs.existsSync(diroutput))
{
    fs.mkdirSync(diroutput,{recursive:true});
}
const appendcustominput = async(path,data) =>{
    try {
          fs.appendFile(path,data,(err)=>{
            if(err)
            console.log(err)
         })
    } catch (error) {
        console.log(error);
    }
};
const executecode =(filepath,custominput)=>
{
    const jobID = path.basename(filepath).split(".")[0];
    const outputpath = path.join(diroutput,`${jobID}.exe`)
    const custominputpath = path.join(diroutput,`${jobID}.input.txt`)
    console.log(jobID);
    appendcustominput(custominputpath,custominput)
    
    
    return new Promise((resolve,reject)=>{
        const separator = process.platform === "win32" ? "\\" : "/"; 
        child.exec(`g++ ${filepath} -o ${outputpath} && cd ${diroutput} && .${separator}${jobID}.exe < ${custominputpath}`,
        //child.exec(`g++ ${filepath} -o ${outputpath}&& cd ${diroutput}&& .\\${jobID}.exe < ${custominputpath}`,
        (error,stdout,stderr)=>{
            if(error){
            reject(error);
            }
            if(stderr){
            reject(stderr);
            }
        resolve(stdout);

        });
    });

}

export default executecode;