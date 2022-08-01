import 'express-async-errors';
import express from 'express';
import errorHandler from './middlewares/error';
import carRouter from './routes/car';
import motorcycleRouter from './routes/motorcycle';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);
app.use(errorHandler);

export default app;
