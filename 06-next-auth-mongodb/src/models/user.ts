import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
  fullname: {
    type: String,
    required: [true, "fullname is required"],
    minLength: [4, "Fullname must be at least 4 characters"],
    maxLength: [20, "Fullname must be less than 20 characters"],
  },
});

const User = models.User || model("User", userSchema);
export default User;
