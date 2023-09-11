//const list = require("../models/file");
import list from '../models/file.js';

const getproblemlist= async(req,res)=>{
     const mydata = await list.find({});
     res.status(200).json({mydata});
};
const testingmessage = async (req,res)=>{
    res.status(200).json({message:testing});
};

//module.exports = {getproblemlist,testingmessage};
export default getproblemlist;