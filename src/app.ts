import express from 'express';
import productsRoute from './routes/productsroute';
import userRoute from './routes/userroute';
import orderRoute from './routes/orderroute';
import loginRoute from './routes/loginroute';

const app = express();

app.use(express.json());
app.use(productsRoute, userRoute, orderRoute, loginRoute);

export default app;
