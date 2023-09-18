/*import express from 'express';
import problem_router from './routes/problem_list_route.js';
import DBconnection from './database/db.js';
import DB_userconnection from './database/db_user.js';
import p_list_model from './models/file.js';
import UserModel from './models/users.js';


const app= express();


//middlewares

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/*await DBconnection();
await DB_userconnection();

app.get("/", (req,res)=>{
res.send("helloguys")
});
app.use("/api",problem_router);

app.get('/list', function(req,res){
    p_list_model.find()
    .then((data) =>{
        console.log(data);
    })
    .catch((err)=>console.log(err));
    
});
app.get('/register', function(req,res){
    UserModel.find()
    .then((data) =>{
        console.log(data);
    })
    .catch((err)=>console.log(err));
    
});

app.post('/registers',(req,res)=>{
    UserModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
});




    

app.listen(8004, ()=>{
console.log("server is listening on port 8002");
});
*/
import express from 'express';
import cors from 'cors';
import problem_router from './routes/problem_list_route.js';
import DB_connection from './database/db.js';

import Problem_List_model from './models/problem_list_model.js';
import UserModel from './models/users_model.js';

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

app.get('/register', async (req, res) => {
  try {
    const data = await UserModel.find();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

//for login
app.post('/login',async(req,res)=>{
    const{email,password}=req.body;

    try {
        const check=await UserModel.findOne({email:email})

        if(check){
        res.json("exist")
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
    const newdata={
        email:email,
        password:password
    }
  try {

    const check=await UserModel.findOne({email:email})

    if(check){
    res.json("exist")
    }
    else{
        await UserModel.insertMany([newdata])
        res.json("does not exist")
        
        //const newUser = await UserModel.create(req.body);
    //res.json(newUser);
    }
    
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(8004, () => {
  console.log("Server is listening on port 8004");
});

