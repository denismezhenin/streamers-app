import { createStyles, rem } from '@mantine/core';

const streamerStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      paddingTop: `calc(${theme.spacing.xl} * 1.5)`,
      paddingBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  content: {
    maxWidth: rem(480),
    width: '100%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      marginRight: 0,
      order: 2,
    },
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
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
    order: 1,
  },
}));

export { streamerStyles };
