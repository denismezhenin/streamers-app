import { error } from "console";
import { Request, Response } from "express";
import { Streamer } from "../models/streamer";

const handleError = (res: Response, err: unknown) => {
  err instanceof Error
    ? res.status(404).json({ message: err.message })
    : res.status(404).json({ message: err });
};

const addStreamer = async (req: Request, res: Response) => {
  try {
    const {
      name,
      platform,
      description,
      upVotes = 0,
      downVotes = 0,
    } = req.body;
    const newStreamer = new Streamer({
      name,
      platform,
      description,
      upVotes,
      downVotes,
    });
    await newStreamer.save();
    const streamers = await Streamer.find();
    res.status(201).json(streamers);
  } catch (err) {
    handleError(res, err);
  }
};

const getAllStreamers = async (req: Request, res: Response) => {
  try {
    const streamers = await Streamer.find();
    res.status(200).json(streamers);
  } catch (err) {
    handleError(res, err);
  }
};

const getStreamerByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const streamer = await Streamer.findById(id);
    console.log(streamer)
    res.status(200).json(streamer);
  } catch (err) {
    handleError(res, err);
  }
};

const updateStreamerVotes = async (req: Request, res: Response) => {
  // console.log(1)
  try {
    const { id, upVotesNumber, downVotesNumber } = req.body;
    // console.log(req.body)
    const streamer = await Streamer.findById(id);
    // if (streamer?.upVotes) {
    //  console.log(1)
    //   return
    // }
    console.log(`up: ${upVotesNumber}, down:${downVotesNumber}`);
    const updateStreamersVotes = await Streamer.findByIdAndUpdate(
      id,
      {
        upVotes: streamer?.upVotes + upVotesNumber,
        downVotes: streamer?.downVotes + downVotesNumber,
      },
      { new: true }
    );
    // console.log(streamer)
    console.log(updateStreamersVotes)
    // setTimeout(() => {
      res.status(200).json(updateStreamersVotes);
    // }, 2000);
  } catch (err) {
    handleError(res, err);
  }
};

export { getAllStreamers, getStreamerByID, addStreamer, updateStreamerVotes };
