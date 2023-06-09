import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(morgan('combined'));

const port = 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
