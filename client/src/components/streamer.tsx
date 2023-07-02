import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  Select,
  ScrollArea,
  Center,
  rem,
  createStyles,
  Container,
  ActionIcon,
} from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThumbUp, ThumbDown, ColorPickerOff } from 'tabler-icons-react';
import { useStreamerState } from '../hooks/useStreamerState';
import { useLocalStorage } from '@mantine/hooks';

export interface UsersTableProps {
  _id: string;
  name: string;
  platform: string;
  description: string;
  downVotes: number;
  upVotes: number;
}

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },
}));

const StreamerRow = ({ _id, platform, name, upVotes, downVotes }: UsersTableProps) => {

  const { isUpVoted, isDownVoted, handleUpVoted, handleDownVoted, votes, disabled } = useStreamerState({
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
              <Text fz="sm" fw={500}>
                {name}
              </Text>
            </div>
          </Group>
        </Text>
      </td>

      <td>{platform}</td>
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
