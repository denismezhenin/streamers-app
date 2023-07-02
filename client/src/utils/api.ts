import { showErrorNotification } from '../components/notifications';
import { streamersAPI } from '../constants/constants';
import { createStreamerFormValues, sendVoteValues } from '../constants/types';

const sendVote = async (data: sendVoteValues) => {
  try {
    const res = await fetch(`${streamersAPI}/${data.id}/vote`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const result = await res.json();
      return result;
    }
    showErrorNotification(res.statusText);
  } catch (err) {
    if (err instanceof Error) showErrorNotification(err.message);
  }
};

const createStreamer = async (values: createStreamerFormValues) => {
  try {
    const res = await fetch(streamersAPI, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const result = await res.json();
      return result;
    }
    showErrorNotification(res.statusText);
  } catch (err) {
    if (err instanceof Error) showErrorNotification(err.message);
  }
};

export { sendVote, createStreamer };
