import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import noteRoutes from './routes/note.route.js';

dotenv.config(); //load env variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/notes", noteRoutes);

// start
app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});
