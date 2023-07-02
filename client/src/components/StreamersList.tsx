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
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { ThumbUp, ThumbDown } from 'tabler-icons-react';
import { StreamerRow } from './streamer';
import { arrStreamerProps } from '../constants/types';

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

const StreamersList = ({ data }: arrStreamerProps) => {
  const { classes, cx, theme } = useStyles();
  const rows = data.map((item) => <StreamerRow {...item} key={item._id} />);

  return (
    <ScrollArea>
      <Table maw={1200} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Streamer</th>
            <th>Platform</th>
            <th>Likes</th>
            <th>Dislikes</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};

export { StreamersList };
