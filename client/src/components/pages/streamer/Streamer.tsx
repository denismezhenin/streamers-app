import { useParams } from 'react-router-dom';
import { ThumbUp, ThumbDown } from 'tabler-icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  createStyles,
  rem,
  Anchor,
  Container,
  Box,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { useStreamerState } from '../../../hooks/useStreamerState';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    // paddingTop: `calc(${theme.spacing.xl} * 4)`,
    // paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      paddingTop: `calc(${theme.spacing.xl} * 1.5)`,
      paddingBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  content: {
    maxWidth: rem(480),
    width: '100%',
    // marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      marginRight: 0,
      order: 2,
    },
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
  image: {
    maxWidth: rem(180),
    // flex: 1,
    order: 1,

    // [theme.fn.smallerThan('sm')]: {
    //   display: 'none',
    // },
  },
  // description: {
  //   color: theme.dark,
  //   maxWidth: 600,

  //   [theme.fn.smallerThan('sm')]: {
  //     maxWidth: '100%',
  //     fontSize: theme.fontSizes.sm,
  //   },
  // },
}));


const Streamer = ({ _id, name, description, platform, upVotes, downVotes }: ) => {
  // const { id } = useParams();
  const { isUpVoted, isDownVoted, handleUpVoted, handleDownVoted, votes, disabled } =
    useStreamerState({
      upVotes,
      downVotes,
    });
  const { classes, cx, theme } = useStyles();

  return (
    <Container m="auto">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text className={classes.title}>{name}</Text>
          <Text mt="md">{description}</Text>
          <Group position="apart" className={classes.footer}>
            <Center>
              <Text fz="sm">
                {`Platform:
                  ${platform}`}
              </Text>
            </Center>

            <Group spacing="lg">
              <Center>
                <ActionIcon disabled={disabled} onClick={() => handleUpVoted(_id)} size="lg">
                  <ThumbUp
                    color={theme.colors.red[6]}
                    fill={isUpVoted ? theme.colors.red[6] : 'white'}
                  />
                </ActionIcon>
                <Text size="sm" className={classes.bodyText}>
                  {votes && votes.upVotes}
                </Text>
              </Center>
              <Center>
                <ActionIcon disabled={disabled} size="lg" onClick={() => handleDownVoted(_id)}>
                  <ThumbDown
                    color={theme.colors.red[6]}
                    fill={isDownVoted ? theme.colors.red[6] : 'white'}
                  />
                </ActionIcon>
                <Text size="sm" className={classes.bodyText}>
                  {votes && votes.downVotes}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
        <Image
          src="/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
          alt="steamers image"
          fit="contain"
          mx="auto"
          className={classes.image}
        />
      </div>
    </Container>
  );
};
export { Streamer };
