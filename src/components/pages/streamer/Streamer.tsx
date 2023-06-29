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
  Box
} from '@mantine/core';
import { Link } from 'react-router-dom';
import img from '/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png';

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

interface ArticleCardProps {
  image: string;
  id: string;
  name: string;
  description: string;
  platform: string;
  likes: number;
  dislikes: number;
}

const StreamerPage = () => {
  const { id } = useParams();
  const { classes, cx, theme } = useStyles();
  const data = {
    platform: 'youtube',
    image: '',
    name: 'Denis',
    description: "From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The",
    likes: 100,
    dislikes: 200,
  };
  return (
    <>
      <Container m="auto">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Text className={classes.title}>{data.name}</Text>
            {/* <Box w={300} h={300}> */}

            <Text mt="md">
              {data.description}
            </Text>
            {/* </Box> */}

            <Group position="apart" className={classes.footer}>
              <Center>
                {/* <Avatar src={author.image} size={24} radius="xl" mr="xs" /> */}
                <Text fz="sm" >
   {               `Platform:
                  ${data.platform}`}
                </Text>
              </Center>

              <Group spacing="lg">
                <Center>
                  <ThumbUp size="1rem" color={theme.colors.red[6]} />
                  <Text size="sm" className={classes.bodyText}>
                    {data.likes}
                  </Text>
                </Center>
                <Center>
                  <ThumbDown size="1rem" color={theme.colors.yellow[7]} />
                  <Text size="sm" className={classes.bodyText}>
                    {data.dislikes}
                  </Text>
                </Center>
              </Group>
            </Group>
          </div>
          <Image
            src={img}
            alt="steamers image"
            fit="contain"
            mx="auto"
            className={classes.image}
          />
        </div>
      </Container>
    </>
  );
};
export { StreamerPage };


// ""left" | "right" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "start" | "justify" | "match-parent""