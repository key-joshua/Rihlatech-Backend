import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';
import express from 'express';
import StatusCodes from 'http-status-codes';

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(cors());


app.use('/api', router);

app.get('**', (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ status: StatusCodes.NOT_FOUND, message: 'WELCOME TO THE RIHLATECH MANAGEMENT TOOL.' });
});

app.post('**', (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ status: StatusCodes.NOT_FOUND, message: 'WELCOME TO THE RIHLATECH MANAGEMENT TOOL.' });
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});

export default app
