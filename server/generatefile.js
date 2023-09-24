import * as fs from 'fs';
import  path from 'path';
import { fileURLToPath } from 'url';
import {v4 as uuid} from 'uuid';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const dircodes = path.join(__dirname,'cppcodes');
if(!fs.existsSync(dircodes))
{
    fs.mkdirSync(dircodes,{recursive:true});
}



const generatefile = async(language,inputcode)=>
{
    const uniqueid = uuid();
    const filename = `${uniqueid}.${language}`;
    const filepath = path.join(dircodes,filename);
    await fs.writeFileSync(filepath,inputcode);
    return filepath;
}

export default generatefile;