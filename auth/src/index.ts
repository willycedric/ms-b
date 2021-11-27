import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import mongoose from 'mongoose';
 
import { currentuserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { singoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
const app = express();
app.use(json());
app.use(currentuserRouter);
app.use(signinRouter);
app.use(singoutRouter);
app.use(signupRouter);

app.all('*', async ()=>{
    throw new NotFoundError();
})
app.use(errorHandler);

const start = async ()=>{
    try{
        await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
        console.log('Connecting to MongoDb');
    }catch(err){
        console.error(err);
    }
    app.listen(3000, ()=>{
        console.log('listening on port 3000 !!!');
    });  
};
start();

