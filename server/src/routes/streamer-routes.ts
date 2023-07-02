import express from "express"
import { addStreamer, getAllStreamers, getStreamerByID, updateStreamerVotes } from "../controllers/streamer-controller";

const streamerRouter = express.Router();

streamerRouter.post("/streamers", addStreamer)


streamerRouter.get("/streamers", getAllStreamers)

streamerRouter.get("/streamers/:id",getStreamerByID)

streamerRouter.put("/streamers/:id/vote", updateStreamerVotes)

export {streamerRouter}