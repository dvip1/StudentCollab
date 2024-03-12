import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const authRoute= require("./auth/auth")

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
app.use('/api/auth', authRoute);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
