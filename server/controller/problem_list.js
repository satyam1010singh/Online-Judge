//const list = require("../models/file");
import p_list_model from '../models/problem_list_model.js';

const getproblemlist= async(req,res)=>{
     const mydata = await p_list_model.find();
     console.log(mydata);
     res.status(200).json({mydata});
};
const testingmessage = async (req,res)=>{
    res.status(200).json({message:testing});
};

//module.exports = {getproblemlist,testingmessage};
export default getproblemlist;