import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  my_Event: { type: String},
  my_list:{type:Array},
  invite_user_deatils:{type:Array},
  mi_inviteEvent:[{event_name:{type:String},who_invite:{type:String}}]
})

// Model
const UserModel = mongoose.model("user", userSchema)

export default UserModel