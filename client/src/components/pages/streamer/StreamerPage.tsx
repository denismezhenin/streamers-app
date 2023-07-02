import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { Streamer } from '../../Streamers-views/Streamer';
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
