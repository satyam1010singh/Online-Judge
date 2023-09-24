
import mongoose from 'mongoose';

const Problem_List_Schema= new mongoose.Schema({
    
problem_des:{
    type: String,
    required:true

},
level:{
    type: String,
    required: true
},
ID:{
    type:Number,
    required:true
},
pcode:{
    type:Number,
    required:true
}

})

const Problem_List_model = mongoose.model('Problem_List',Problem_List_Schema);
export default Problem_List_model;