import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandling from './middlewares/errorHandler.js';
import createUsreTable from './data/createUserTable.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

// Error handling middleware (function reference, DO NOT invoke)
app.use(errorHandling);

// Create Table Before Server run

createUsreTable();

// Test DB
app.get("/", async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The Database Name is : ${result.rows[0].current_database}`);
});

// Server Running
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});