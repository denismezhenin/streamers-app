import { createStyles, Header as Head, Container, rem, px, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
}));

const Header = () => {
  const { classes } = useStyles();
  return (
    <Head height={{ base: 40, sm: 60 }} mb={{ base: 16, sm: 32 }}>
      <Container className={classes.header}>{/* <MantineLogo size={28} /> */}</Container>
    </Head>
  );
};
export { Header };
