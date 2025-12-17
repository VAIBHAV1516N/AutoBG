import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectDB from './configs/mongodb.js';

//app config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cors());

//api endpoints
app.get('/', (req, res) => {
    res.send('API is Working!');
});

//listen
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));