import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    tokens:[
        {
            token:{
                type:String
            }
        }
    ]
})


userSchema.pre('save', async function (next){
    console.log("hi inside pre");
    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY,{expiresIn:"1D"});      
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}
const UserModel = mongoose.model('Users',userSchema);

export default UserModel;

