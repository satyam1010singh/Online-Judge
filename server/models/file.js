import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    
problem_id:{
    type: Number,
    required:true

},
level:{
    type: String,
    required: true
}

})

const File = mongoose.model('File',fileSchema);
export default File;