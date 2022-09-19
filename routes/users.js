import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  getUserByName,
  updateUser,
} from "../controllers/user.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//update
router.put("/:id", updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/find/:id", getUser);
router.get("/:id", getUserByName);

//get all
router.get("/", getAllUsers);

export default router;
