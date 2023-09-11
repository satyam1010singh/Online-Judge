import { Console } from 'console';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DBconnection = async()=>{
    console.log(process.env.MONDODB_URL);
    const MONDODB_URL = process.env.MONDODB_URL;
    try {
        
        await mongoose.connect(MONDODB_URL,{useNewUrlParser:true},{useUnifiedTopology:true},);
        console.log("db connection done");
    } catch (error) {
        console.log("error while connecting",error.message);
    }
};

export default DBconnection;