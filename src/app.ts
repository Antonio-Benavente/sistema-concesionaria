import express, { Application } from 'express';
import routesAuto from './routes/routesAuto';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());


//Routes
app.use('/api/v1/autos',routesAuto);

export default app;