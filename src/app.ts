import express from 'express';
import productsRoute from './routes/productsroute';
import userRoute from './routes/userroute';

const app = express();

app.use(express.json());
app.use(productsRoute, userRoute);

export default app;
