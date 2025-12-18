import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';

//app config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cors());

//api routed
app.get('/', (req, res) => {
    res.send('API is Working!');
});

app.use('/api/user', userRouter);

//listen
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));