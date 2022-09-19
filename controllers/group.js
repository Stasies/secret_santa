import Group from "../models/Group.js";
import User from "../models/User.js";

export const createGroup = async (req, res, next) => {
  const newGroup = new Group(req.body);
  try {
    const savedGroup = await newGroup.save();
    res.status(200).json(savedGroup);
  } catch (error) {
    next(error);
  }
};
export const updateGroup = async (req, res, next) => {
  try {
    const updatedGroup = await Group.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedGroup);
  } catch (error) {
    next(error);
  }
};
export const deleteGroup = async (req, res, next) => {
  try {
    const deletedGroup = await Group.findByIdAndDelete(req.params.id);
    res.status(200).json("Group has been deleted");
  } catch (error) {
    next(error);
  }
};
export const getGroup = async (req, res, next) => {
  try {
    const group = await Group.findById(req.params.id);
    res.status(200).json(group);
  } catch (error) {
    next(error);
  }
};
export const getAllGroups = async (req, res, next) => {
  try {
    const groups = await Group.find(req.query);
    res.status(200).json(groups);
  } catch (error) {
    next(error);
  }
};

export const getGroupMembers = async (req, res, next) => {
  try {
    const group = await Group.findById(req.params.id);
    const users = await User.find({ groupId: req.params.id });
    const list = await Promise.all(
      users.map((name) => {
        return name;
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
