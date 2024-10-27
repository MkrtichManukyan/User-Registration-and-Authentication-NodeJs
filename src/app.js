import express from "express";
import cors from "cors";
import { db } from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import adminRoutes from "./routes/adminRoute.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger-output.json' assert { type: 'json' };

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());

db.getConnection();

app.use('/api', userRoutes);
app.use('/api', adminRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export { app };