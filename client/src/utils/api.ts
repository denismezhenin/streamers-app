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
    console.log(res.statusText);
    return null;
    // console.log(result);
  } catch (err) {
    console.log(err.message)
    // return null;
  }
};

const createStreamer = async(values) => {
  try {
    const res = await fetch("http://localhost:3000/streamers", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(values)
    })
    const result = await res.json()
    if (res.status === 201) {
      return result;
    }
    console.log(result)
    // return result
  } catch (err) {
    console.log(err)
    return null;
  }
} 

export { sendVote, createStreamer };
