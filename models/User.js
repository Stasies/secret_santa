import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    groupId: {
      type: String,
    },
    group_name: {
      type: String,
    },
    selected_person: {
      type: String,
    },
    wish_list: [
      {
        type: Object,
        img: {
          type: String,
        },
        title: {
          type: String,
        },
        price: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("User", UserSchema);
