import { createStyles, rem } from '@mantine/core';

const footerStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(50),
    borderTop: `${rem(1)} solid`,
    [theme.fn.smallerThan('sm')]: {
      marginTop: rem(25),
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.md,
    },
  },
  link: {
    display: 'inline',
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(2),
    paddingBottom: rem(2),
    whiteSpace: 'nowrap',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export { footerStyles };
