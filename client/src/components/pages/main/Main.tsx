import { Flex, SimpleGrid } from '@mantine/core';
import { AddStreamerForm } from '../../createStreamerForm';
import { StreamersList } from '../../StreamersList';
import { getStreamers } from '../../../utils/api';
import { useFetch } from '../../../hooks/useFetch';
import { UsersTableProps } from '../../streamer';
import { Loader, Center } from '@mantine/core';
import { AppLoader } from '../../loader';
import {  streamersAPI } from '../../../constants/constants';

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
