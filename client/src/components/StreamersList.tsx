import { Table, ScrollArea, createStyles } from '@mantine/core';
import { StreamerRow } from './streamer';
import { arrStreamerProps } from '../constants/types';
import { UI } from '../constants/UI';

const useStyles = createStyles((theme) => ({
  platform: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

const StreamersList = ({ data }: arrStreamerProps) => {
  const { classes } = useStyles();
  const rows = data.map((item) => <StreamerRow {...item} key={item._id} />);

  return (
    <ScrollArea>
      <Table maw={1200} verticalSpacing="sm">
        <thead>
          <tr>
            <th>{UI.streamerList.streamer}</th>
            <th className={classes.platform}>{UI.streamerList.platform}</th>
            <th>{UI.streamerList.upVotes}</th>
            <th>{UI.streamerList.downVotes}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};

export { StreamersList };
