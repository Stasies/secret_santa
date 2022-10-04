import express from "express";
import {
  createGift,
  getGift,
  getAllGifts,
  getFilteredGifts,
  updateGift,
} from "../controllers/gifts.js";

const router = express.Router();

//create
router.post("/", createGift);
//update
router.put("/:id", updateGift);
//get
router.get("/find/:id", getGift);

//get all
router.get("/", getAllGifts);
router.get("/filtered", getFilteredGifts);

export default router;
