import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DB_connection = async()=>{
    console.log(process.env.MONGODB_URL);
    const MONGODB_URL = process.env.MONGODB_URL;
    try {
        
        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true},{useUnifiedTopology:true},);
        console.log("db connection for users done");
    } catch (error) {
        console.log("error while connecting",error.message);
    }
};

export default DB_connection;
