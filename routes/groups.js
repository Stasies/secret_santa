import express from "express";
import {
  createGroup,
  updateGroup,
  deleteGroup,
  getGroup,
  getAllGroups,
  getGroupMembers,
} from "../controllers/group.js";

const router = express.Router();

//create
router.post("/", createGroup);

//update
router.put("/:id", updateGroup);

//delete
router.delete("/:id", deleteGroup);

//get
router.get("/find/:id", getGroup);

//get all
router.get("/", getAllGroups);
router.get("/group/:id", getGroupMembers);

export default router;
