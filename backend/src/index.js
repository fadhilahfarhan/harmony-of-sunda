import express, { json, urlencoded } from 'express';
import cors from 'cors';
import router from './router/router.js';

const app = express();

app.use(cors())
app.use(urlencoded({extended: false}));
app.use(json())
app.use(router)

app.listen(3000, ()=>{
  console.log('Status: Running, Port: 3000');
})