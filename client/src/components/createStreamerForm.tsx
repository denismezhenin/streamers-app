import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { Button, Group, TextInput, Box, Select, Textarea } from '@mantine/core';
import { useState } from 'react';
import { createStreamer } from '../utils/api';
import { createStreamerFormValues } from '../constants/types';

const AddStreamerForm = ({
  setStreamers,
}: {
  setStreamers: React.Dispatch<React.SetStateAction<null>>;
}) => {
  const [disabled, setDisabled] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      platform: '',
      description: '',
    },
    validate: {
      name: isNotEmpty('Please provide a name of a streamer'),
      platform: isNotEmpty('Please choose a platform'),
      description: hasLength({ min: 3 }, 'Please provide description of streamer'),
    },
  });

  const handleSubmit = async (values: createStreamerFormValues) => {
    setDisabled(true);
    const streamers = await createStreamer(values);
    if (streamers) {
      setStreamers(streamers);
      form.reset();
    }
    setDisabled(false);
    // form.getInputProps
  };

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      p={15}
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <TextInput
        label="Name"
        placeholder="Streamer's Name"
        withAsterisk
        {...form.getInputProps('name')}
      />
      <Select
        label="Select Streamer's platform"
        placeholder="Platform"
        data={[
          { value: 'Twitch', label: 'Twitch' },
          { value: 'Youtube', label: 'Youtube' },
          { value: 'TikTok', label: 'TikTok' },
          { value: 'Kick', label: 'Kick' },
          { value: 'Rumble', label: 'Rumble' },
        ]}
        withAsterisk
        mt="md"
        {...form.getInputProps('platform')}
      />
      <Textarea
        placeholder="Description of a streamer"
        label="Description"
        withAsterisk
        minRows={3}
        mt="md"
        maxLength={300}
        {...form.getInputProps('description')}
      />
      {/* <Group  mt="md"> */}
      <Button type="submit" fullWidth mt="md" disabled={disabled}>
        Submit
      </Button>
      {/* </Group> */}
    </Box>
  );
};
export { AddStreamerForm };
