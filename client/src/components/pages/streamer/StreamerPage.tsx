import { useParams } from 'react-router-dom';
import { Center, Loader } from '@mantine/core';
import { Link } from 'react-router-dom';
import img from '/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png';
import { useFetch } from '../../../hooks/useFetch';
import { Streamer } from './streamer';
import { AppLoader } from '../../loader';

const StreamerPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`http://localhost:3000/streamers/${id}`);
  return (
    <>
      {loading ? <AppLoader /> : null}
      {data ? <Streamer {...data} /> : null}
    </>
  );
};
export default StreamerPage;
