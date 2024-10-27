import express from "express";
import { updateUserRole, getAllUser } from "../controllers/adminController.js";
import { authToken } from "../middlewares/authMiddleware.js";
import { adminToken } from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.put('/updateUserRole/:id', authToken, adminToken, updateUserRole);
router.get('/getAllUser', authToken, adminToken, getAllUser);

export default router;