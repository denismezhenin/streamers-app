import { Avatar, Group, Text, createStyles, ActionIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ThumbUp, ThumbDown } from 'tabler-icons-react';
import { useStreamerState } from '../hooks/useStreamerState';
import { streamerProps } from '../constants/types';

const useStyles = createStyles((theme) => ({
  bodyText: {
    color: theme.colors.dark[2],
  },
  platform: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

const StreamerRow = ({ _id, platform, name, upVotes, downVotes }: streamerProps) => {
  const { isUpVoted, isDownVoted, handleUpVoted, handleDownVoted, votes, disabled } =
    useStreamerState({
      upVotes,
      downVotes,
    });

  const { classes, cx, theme } = useStyles();
  return (
    <tr key={_id}>
      <td>
        <Text component={Link} to={`streamer/${_id}`}>
          <Group spacing="sm">
            <Avatar size={40} radius={40}>
              {name.slice(0, 2).toLocaleUpperCase()}
            </Avatar>
            <div>
              <Text fz="sm" fw={500} w={{ base: 110, xs: 'auto' }} truncate>
                {name}
              </Text>
            </div>
          </Group>
        </Text>
      </td>
      <td className={classes.platform}>{platform}</td>
      <td>
        <Group>
          <ActionIcon disabled={disabled} onClick={() => handleUpVoted(_id)} size="lg">
            <ThumbUp color={theme.colors.red[6]} fill={isUpVoted ? theme.colors.red[6] : 'white'} />
          </ActionIcon>
          <Text size="sm" className={classes.bodyText}>
            {votes && votes.upVotes}
          </Text>
        </Group>
      </td>
      <td>
        <Group>
          <ActionIcon disabled={disabled} size="lg" onClick={() => handleDownVoted(_id)}>
            <ThumbDown
              color={theme.colors.red[6]}
              fill={isDownVoted ? theme.colors.red[6] : 'white'}
            />
          </ActionIcon>
          <Text size="sm" className={classes.bodyText}>
            {votes && votes.downVotes}
          </Text>
        </Group>
      </td>
    </tr>
  );
};

export { StreamerRow };
