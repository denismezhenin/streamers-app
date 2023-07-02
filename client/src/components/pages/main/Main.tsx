import { Flex, SimpleGrid } from '@mantine/core';
import { AddStreamerForm } from '../../createStreamerForm';
import { StreamersList } from '../../StreamersList';
import { getStreamers } from '../../../utils/api';
import { useFetch } from '../../../hooks/useFetch';
import { UsersTableProps } from '../../streamer';
import { Loader, Center } from '@mantine/core';

const MainPage = () => {
  // const [streamers, setStreamers] = useState([]);
  const { data, loading, error, setData } = useFetch('http://localhost:3000/streamers');
console.log(error)
  // useEffect(() => {
  //   const fetchStreamers = async () => {
  //     const result = await getStreamers();
  //     result ? setStreamers(result) : null;
  //   };
  //   fetchStreamers();
  // }, []);
  return (
    <>
      <AddStreamerForm setStreamers={setData} />
      {loading && (
        <Center>
          <Loader />
        </Center>
      )}
      {data && <StreamersList data={data} />}
    </>
  );
};
export default MainPage;
