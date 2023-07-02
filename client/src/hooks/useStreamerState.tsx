import { useState } from 'react';
import { UsersTableProps } from '../components/streamer';
import { sendVote } from '../utils/api';

const useStreamerState = ({ upVotes, downVotes }: { upVotes: number; downVotes: number }) => {
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [votes, setVotes] = useState({ upVotes, downVotes });

  const setVotesFromResult = (result: UsersTableProps) => {
    setVotes({ upVotes: result.upVotes, downVotes: result.downVotes });
  };

  const handleUpVoted = async (id: string) => {
    if (isUpVoted) {
      setIsUpVoted(false);
      setDisabled(true);
      const result = await sendVote({ id, upVotesNumber: -1, downVotesNumber: 0 });
      result ? setVotesFromResult(result) : setIsUpVoted(true);
      console.log(result)
      setDisabled(false);
    } else {
      const downVote = isDownVoted;
      setIsUpVoted(true);
      setIsDownVoted(false);
      setDisabled(true);
      const isDownVotedCount = isDownVoted ? -1 : 0;
      const result = await sendVote({ id, upVotesNumber: 1, downVotesNumber: isDownVotedCount });
      result ? setVotesFromResult(result) : (setIsUpVoted(false), setIsDownVoted(downVote));
      setDisabled(false);
    }
  };

  const handleDownVoted = async (id: string) => {
    if (isDownVoted) {
      setIsDownVoted(false);
      setDisabled(true);
      const result = await sendVote({ id, upVotesNumber: 0, downVotesNumber: -1 });
      result ? setVotesFromResult(result) : setIsDownVoted(true);
      setDisabled(false);
    } else {
      const upVote = isUpVoted;
      setIsDownVoted(true);
      setIsUpVoted(false);
      setDisabled(true);
      const isUpVotedCount = isUpVoted ? -1 : 0;
      const result = await sendVote({ id, upVotesNumber: isUpVotedCount, downVotesNumber: 1 });
      result ? setVotesFromResult(result) : (setIsDownVoted(false), setIsUpVoted(upVote));
      setDisabled(false);
    }
  };

  return {
    isUpVoted,
    isDownVoted,
    handleUpVoted,
    handleDownVoted,
    votes,
    setVotes,
    disabled,
  };
};

export { useStreamerState };
