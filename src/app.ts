import express from 'express';
import productsRoute from './routes/productsroute';
import userRoute from './routes/userroute';
import orderRoute from './routes/orderroute';

const app = express();

app.use(express.json());
app.use(productsRoute, userRoute, orderRoute);

export default app;
