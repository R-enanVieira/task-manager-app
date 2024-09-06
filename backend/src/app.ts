import express from 'express';
import taskRoutes from './routes/taskRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());                  //Middleware to parse JSON data
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

export default app;