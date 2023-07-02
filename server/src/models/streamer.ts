import mongoose from "mongoose";
import { Schema } from "mongoose";

 const streamerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  upVotes: {
    type: Number,
  },
  downVotes: {
    type: Number,
  },


 }) 

 const Streamer = mongoose.model('Streamer', streamerSchema)

 export {Streamer}