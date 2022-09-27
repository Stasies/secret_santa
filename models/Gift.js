import mongoose from "mongoose";
const { Schema } = mongoose;

const GiftSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    category: {
      type: String,
    },

    selectedBy: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Gift", GiftSchema);
