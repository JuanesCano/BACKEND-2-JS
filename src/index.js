import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './database.js';
connectDB()

import empleadoRoutes from "empleadoRoutes";

const app = express();
app.set('port', 5000);
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/empleados", empleadoRoutes);

app.listen(app.get('port'), () => {console.log('servidor escuchando por el puerto', app.get('port'));});