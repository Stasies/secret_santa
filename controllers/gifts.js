import e from "express";
import Gift from "../models/Gift.js";

export const createGift = async (req, res, next) => {
  const newGift = new Gift(req.body);
  try {
    const savedGift = await newGift.save();
    res.status(200).json(savedGift);
  } catch (error) {
    next(error);
  }
};
export const updateGift = async (req, res, next) => {
  try {
    const updatedGift = await Gift.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedGift);
  } catch (error) {
    next(error);
  }
};
export const getGift = async (req, res, next) => {
  try {
    const gift = await Gift.findById(req.params.id);
    res.status(200).json(gift);
  } catch (error) {
    next(error);
  }
};
export const getAllGifts = async (req, res, next) => {
  try {
    const gifts = await Gift.find(req.query);
    res.status(200).json(gifts);
  } catch (error) {
    next(error);
  }
};
export const getFilteredGifts = async (req, res, next) => {
  const qGender = req.query.gender;
  const qAge = req.query.age;
  const qCat = req.query.category;
  let gifts;
  try {
    if (qAge && qCat) {
      gifts = await Gift.aggregate([
        {
          $match: {
            $expr: {
              $and: [
                { $eq: [{ $getField: "age" }, qAge] },
                { $eq: [{ $getField: "category" }, qCat] },
              ],
            },
          },
        },
      ]);
    } else if (qAge && !qCat) {
      gifts = await Gift.aggregate([
        { $match: { $expr: { $eq: [{ $getField: "age" }, qAge] } } },
      ]);
    } else if (qCat && !qAge) {
      gifts = await Gift.aggregate([
        { $match: { $expr: { $eq: [{ $getField: "category" }, qCat] } } },
      ]);
    } else {
      gifts = await Gift.find();
    }
    res.status(200).json(gifts);
  } catch (error) {
    next(error);
  }
};
