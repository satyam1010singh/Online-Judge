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
const executecode =(filepath)=>
{
    const jobID = path.basename(filepath).split(".")[0];
    const outputpath = path.join(diroutput,`${jobID}.exe`)
    console.log(jobID);
    return new Promise((resolve,reject)=>{
        child.exec(`g++ ${filepath} -o ${outputpath}&& cd ${diroutput}&& .\\${jobID}.exe`,
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