import express from "express";
import { createUser, loginUser, updateUser } from "../controllers/userController.js";
import { authToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/createUser', createUser);
router.post('/login', loginUser);
router.put('/updateUser/:id', authToken, updateUser);

export default router;