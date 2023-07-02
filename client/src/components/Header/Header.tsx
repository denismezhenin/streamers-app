import {
  createStyles,
  Header as Head,
  Container,
  rem,
  px,
  em,
  ActionIcon,
  Image,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles(() => ({
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
    <Head mb={{ base: 8, sm: 16 }} p={{ base: 5, sm: 10 }} height="auto">
      <Container className={classes.header}>
        <ActionIcon component={Link} to="/" size={50}>
          <Image src="./icon.svg" alt="Streamers app logo" />
        </ActionIcon>
      </Container>
    </Head>
  );
};
export { Header };
