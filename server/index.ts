import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import { favoritesRoutes } from './routes/favoritesRoutes';
import { userRoutes } from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.use(morgan('combined'));

app.use('/api/users', userRoutes);
app.use('/api/favorites', favoritesRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
