import { showErrorNotification } from '../components/notifications';
import { UsersTableProps } from '../components/streamer';

const sendVote = async (data) => {
  try {
    const res = await fetch(`http://localhost:3000/streamers/${data.id}/vote`, {
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

const createStreamer = async (values) => {
  try {
    const res = await fetch('http://localhost:3000/streamers', {
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
