import express from "express";
import { createUser, deleteUser, getAllUsers, getUsersById, updateUser } from "../controllers/userController.js";

const router = express.Router();


router.post("/user", createUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUsersById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;