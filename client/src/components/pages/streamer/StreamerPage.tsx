import { useParams } from 'react-router-dom';
import { Center, Loader } from '@mantine/core';
import { Link } from 'react-router-dom';
import img from '/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png';
import { useFetch } from '../../../hooks/useFetch';
import { Streamer } from './streamer';
import { AppLoader } from '../../loader';
import { streamerAPI } from '../../../constants/constants';

const StreamerPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${streamerAPI}/${id}`);
  return (
    <>
      {loading ? <AppLoader /> : null}
      {data ? <Streamer {...data} /> : null}
    </>
  );
};
export default StreamerPage;
