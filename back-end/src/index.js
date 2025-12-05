import express from 'express';
// import comentariosRoutes from './Routes/comentariosRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

// app.use('/comentarios', comentariosRoutes);