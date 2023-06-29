import { createStyles, Container, Group, ActionIcon, rem, Anchor, Flex, Text } from '@mantine/core';
import { BrandGithub } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
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

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Anchor
            color="black"
            href="https://github.com/denismezhenin"
            target="_blank"
            className={classes.link}
          >
            <Flex justify="center" align="center">
              <BrandGithub />
              <Text align="center">Dzianis Miazhenin</Text>
            </Flex>
          </Anchor>
        </Group>
        <Text>2023</Text>
      </Container>
    </div>
  );
};
export { Footer };
