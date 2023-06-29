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

interface UsersTableProps {
  data: { avatar: string; name: string; job: string; email: string; role: string }[];
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

const StreamersList = ({ data }: UsersTableProps) => {
  const { classes, cx, theme } = useStyles();
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Text component={Link} to={`streamer/${item.id}`}>
        <Group spacing="sm">
          <Avatar size={40} radius={40}>
            {item.name.slice(0, 2).toLocaleUpperCase()}
          </Avatar>
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            {/* <Text fz="xs" c="dimmed">
              {item.email}
            </Text> */}
          </div>
        </Group>
        </Text>
      </td>

      <td>{item.platform}</td>
      <td>
        <Group>
          <ThumbUp size="1rem" color={theme.colors.red[6]} />
          <Text size="sm" className={classes.bodyText}>
            {item.likes}
          </Text>
        </Group>
      </td>
      <td>
        <Group>
          <ThumbDown size="1rem" color={theme.colors.red[6]} />
          <Text size="sm" className={classes.bodyText}>
            {item.dislikes}
          </Text>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
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
