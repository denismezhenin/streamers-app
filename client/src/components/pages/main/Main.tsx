import { Flex, SimpleGrid } from '@mantine/core';
import { AddStreamerForm } from '../../createStreamerForm';
import { StreamersList } from '../../StreamersList';
import { getStreamers } from '../../../utils/api';
import { useFetch } from '../../../hooks/useFetch';
import { UsersTableProps } from '../../streamer';
import { Loader, Center } from '@mantine/core';
import { AppLoader } from '../../loader';

const MainPage = () => {

  const { data, loading, error, setData } = useFetch('http://localhost:3000/streamers');
  console.log(error);

  return (
    <>
      <AddStreamerForm setStreamers={setData} />
      {loading && <AppLoader />}
      {data && <StreamersList data={data} />}
    </>
  );
};
export default MainPage;
