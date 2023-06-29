import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { Button, Group, TextInput, Box, Select, Textarea } from '@mantine/core';

const AddStreamerForm = () => {
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

  const handleSubmit = (values) => {
    console.log(values);
    form.reset();
    // form.getInputProps
  };

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
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
      <Button type="submit" fullWidth mt="md">
        Submit
      </Button>
      {/* </Group> */}
    </Box>
  );
};
export { AddStreamerForm };
