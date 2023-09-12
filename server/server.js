import express from 'express';
import problem_router from './routes/problem_list_route.js';
import DBconnection from './database/db.js';

const app= express();


//middlewares

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res)=>{
res.send("helloguys")
});
app.use("/api",problem_router);



 await DBconnection();   

app.listen(8007, ()=>{
console.log("server is listening on port 8002");
});
