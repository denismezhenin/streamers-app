export type streamerProps = {
  _id: string;
  name: string;
  platform: string;
  description: string;
  downVotes: number;
  upVotes: number;
};

export type arrStreamerProps = {
  data: streamerProps[];
};

export type createStreamerFormValues = {
  name: string;
  platform: string;
  description: string;
};

export type sendVoteValues = {
  id: string;
  upVotesNumber: number;
  downVotesNumber: number;
};
