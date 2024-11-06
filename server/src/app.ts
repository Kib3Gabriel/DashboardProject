import express from 'express';
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', authRoutes);

export default app;