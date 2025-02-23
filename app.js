import express from 'express';

import { PORT, DB_URI } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';

import connectToDatabase from './database/mongoose.js';
import errorMiddleware from './middlewares/error.middleware.js';


const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);  

app.use(errorMiddleware)

app.get('/', (req, res) => {
    res.send('Hello Worl');
})

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    await connectToDatabase()
})

export default app;