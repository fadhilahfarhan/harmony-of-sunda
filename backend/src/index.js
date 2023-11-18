import express, { json, urlencoded } from 'express';
import cors from 'cors';
import router from './router/router.js';

const app = express();
const port = process.env.APP_PORT

app.use(cors())
app.use(urlencoded({extended: false}));
app.use(json())
app.use(router)

app.listen(port, () => {
  console.log(`Status: Running, Port: ${port}`);
})