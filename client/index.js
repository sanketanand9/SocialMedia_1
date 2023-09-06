import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js';
import userRoute from './Routes/UserRoute.js'

dotenv.config();
const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
mongoose.connect(process.env.MONGO_SERVER,
{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>app.listen(process.env.PORT,()=>console.log(`Listning at ${process.env.PORT}`))).
catch((err)=>{console.log(err)});

//use of routes
app.use('/auth',AuthRoute);
app.use('/user',userRoute);