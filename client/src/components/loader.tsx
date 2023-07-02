import { Loader, Center } from '@mantine/core';

const AppLoader = () => {
  return (
    <Center maw={400} h="100vh" mx="auto">
      <Loader size="lg" />
    </Center>
  );
};

export { AppLoader };
