import { ThumbUp, ThumbDown } from 'tabler-icons-react';
import { Image, Text, ActionIcon, Group, Center, Container } from '@mantine/core';
import { useStreamerState } from '../../hooks/useStreamerState';
import { UI } from '../../constants/UI';
import { streamerProps } from '../../constants/types';
import { streamerStyles } from './streamerStyles';

const Streamer = ({ _id, name, description, platform, upVotes, downVotes }: streamerProps) => {
  const { isUpVoted, isDownVoted, handleUpVoted, handleDownVoted, votes, disabled } =
    useStreamerState({
      upVotes,
      downVotes,
    });
  const { classes, theme } = streamerStyles();

  return (
    <Container m="auto">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text className={classes.title}>{name}</Text>
          <Text mt="md">{description}</Text>
          <Group position="apart" className={classes.footer}>
            <Center>
              <Text fz="sm">
                {`${UI.streamers.platform}:
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
