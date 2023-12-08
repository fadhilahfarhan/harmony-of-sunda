import express from 'express';
import cors from 'cors';
import router from './router/router.js';

const app = express();
const port = process.env.APP_PORT

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Status: Running, Port: ${port}`);
})