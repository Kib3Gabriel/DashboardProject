import express,{Request, Response} from 'express';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser'
import { checkServerRunning } from './controllers/authController';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api/v1', authRoutes);
app.use('/ok', checkServerRunning)


export default app;


