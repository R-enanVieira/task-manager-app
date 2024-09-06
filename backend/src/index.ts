import express from 'express';
import { connectDB } from './config/db';

const app = express();

//Middleware to parse JSON data
app.use(express.json());

// Connect to the database
connectDB();

// Define basic routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Define port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});