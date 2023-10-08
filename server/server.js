import express from 'express';
import cors from 'cors';
import problem_router from './routes/problem_list_route.js';
import DB_connection from './database/db.js';
import executecode from './executecode.js';
import generatefile from './generatefile.js';
import bcrypt from "bcrypt";
import Problem_List_model from './models/problem_list_model.js';
import UserModel from './models/users_model.js';
import Problem_Detail_Model from './models/Problem_Details.js';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Connect to the databases
(async () => {
  await DB_connection();
})();

app.get("/", (req, res) => {
  res.send("helloguys");
});

app.use("/api", problem_router);

app.get('/list', async (req, res) => {
  try {
    const data = await Problem_List_model.find();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

//for Problem Details
app.get('/problemdetails',async(req,res)=>
{
  const {pcode} = req.query;
  try {
    const data = await Problem_Detail_Model.findOne({pcode:pcode});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }

});
//for code submission
app.post('/submit',async(req,res)=>{
  const {language,inputcode,custominput} = req.body;
  if(inputcode===undefined)
  return res.status(404).json({success:false,error:'empty code'});

  const filepath = await generatefile(language,inputcode);

  const result= await executecode(filepath,custominput);
  res.json(result);
})

//for login
app.post('/login',async(req,res)=>{
    const{email,password}=req.body;

    try {
        const userlogin=await UserModel.findOne({email:email})

        if(userlogin){
          const passwordmatch= await bcrypt.compare(password,userlogin.password);
          const token = await userlogin.generateAuthToken();
          console.log(token);
          if(passwordmatch){
        res.json("exist");
          }
          else{
            res.json("does not exist")
          }
        }
        else{
            res.json("does not exist")
        }

    } catch (error) {
        res.json(error)
    }
});
//for signup
app.post('/signup', async (req, res) => {
    const{email,password}=req.body;
    const newdata=new UserModel({
        email,password
    })
  try {

    const check=await UserModel.findOne({email:email})

    if(check){
    res.json("exist")
    }
    else{
      await newdata.save();
        //await UserModel.bulkSave([newdata])
        res.json("does not exist")
    }
    
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: 'An error occurred' });
  }
});
//send latest code to database
app.post('/sendtodb',async(req,res)=>{
  const {inputcode} = req.body;
  const newdata={
    inputcode:inputcode
  }
  try {
    await Problem_Detail_Model.insertMany([newdata]);
    res.json(newdata);
  } catch (error) {
    console.log(error)
  }
})

app.listen(8004, () => {
  console.log("Server is listening on port 8004");
});

