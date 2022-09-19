import mongoose from "mongoose";
const { Schema } = mongoose;

const GroupSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    names: [
      {
        type: String,
        required: true,
      },
    ],
    drawn: [
      {
        type: String,
      },
    ],
    group_name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    budget: {
      type: Number,
    },
    currency: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    messages: [
      {
        sender: {
          type: String,
        },
        text: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Group", GroupSchema);
