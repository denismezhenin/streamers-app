import { AddStreamerForm } from './createStreamerForm';
import { StreamersList } from '../../Streamers-views/StreamersList';
import { useFetch } from '../../../hooks/useFetch';
import { AppLoader } from '../../loader';
import { streamersAPI } from '../../../constants/constants';

const MainPage = () => {
  const { data, loading, setData } = useFetch(streamersAPI);

  return (
    <>
      <AddStreamerForm setStreamers={setData} />
      {loading ? <AppLoader /> : null}
      {data ? <StreamersList data={data} /> : null}
    </>
  );
};
export default MainPage;
