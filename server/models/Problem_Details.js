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
    Input:{
        type:String
    },
    Output:{
        type:String
    },
    testcases:{
        type:Array
    },
    outputcases:{
        type:Array
    },
    code :{
        type:String
    }
})

const Problem_Detail_Model = mongoose.model('Problem_Detail',Problem_Detail_Schema);
export default Problem_Detail_Model;