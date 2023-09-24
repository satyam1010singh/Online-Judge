import mongoose from 'mongoose';

const Problem_Detail_Schema = new mongoose.Schema({
    pcode:{
            type:Number
    },
    Heading:{
            type:String

    },
    Description:{
        type:String
    },
    Sample_Input:{
        type:String
    },
    Sample_Output:{
        type:String
    }
})

const Problem_Detail_Model = mongoose.model('Problem_Detail',Problem_Detail_Schema);
export default Problem_Detail_Model;