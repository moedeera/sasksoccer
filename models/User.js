import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "username is required"],
    },
    image: {
      type: String,
    },
    leagues: [
      {
        type: Schema.Types.ObjectId,
        ref: "League",
      },
    ],
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "League",
      },
    ],
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
