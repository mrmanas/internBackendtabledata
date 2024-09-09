import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from './router/contactRoutes';
import sequelize from './sequelize';
import cors from 'cors';


// Initialize Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());  // Enable CORS
app.use(bodyParser.json());

// Routes
app.use('/api', contactRoutes); // Define the contact API routes

// Start server and sync database
const startServer = async () => {
  try {
    await sequelize.sync(); // Sync models with the database
    console.log('Database synced.');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

startServer();
