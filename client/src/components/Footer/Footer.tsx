import { Container, Group, ActionIcon, Anchor, Flex, Text, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import { BrandGithub } from 'tabler-icons-react';
import { UI } from '../../constants/UI';
import { footerStyles } from './footerStyles';

const Footer = () => {
  const { classes } = footerStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <ActionIcon component={Link} to="/" size={50}>
          <Image src="./icon.svg" alt="Streamers app logo" />
        </ActionIcon>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Anchor
            color="black"
            href="https://github.com/denismezhenin"
            target="_blank"
            className={classes.link}
          >
            <Flex justify="center" align="center">
              <BrandGithub />
              <Text align="center">{UI.footer.name}</Text>
            </Flex>
          </Anchor>
        </Group>
        <Text>{UI.footer.year}</Text>
      </Container>
    </div>
  );
};
export { Footer };
