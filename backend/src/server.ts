import app from './app';
import { connectDB } from './config/db';

// Define port and start the server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try{
        await connectDB();               // Connect to the database
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error: ${error.message}');
    }
};

startServer();