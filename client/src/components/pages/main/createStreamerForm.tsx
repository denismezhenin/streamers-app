import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { Button, TextInput, Box, Select, Textarea } from '@mantine/core';
import { useState } from 'react';
import { createStreamer } from '../../../utils/api';
import { createStreamerFormValues } from '../../../constants/types';
import { UI } from '../../../constants/UI';

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
      name: isNotEmpty(UI.createStreamerForm.nameError),
      platform: isNotEmpty(UI.createStreamerForm.platformError),
      description: hasLength({ min: 3 }, UI.createStreamerForm.descriptionError),
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
        label={UI.createStreamerForm.nameLabel}
        placeholder={UI.createStreamerForm.namePlaceholder}
        withAsterisk
        {...form.getInputProps('name')}
      />
      <Select
        label={UI.createStreamerForm.platformLabel}
        placeholder={UI.createStreamerForm.platformPlaceholder}
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
        placeholder={UI.createStreamerForm.descriptionPlaceholder}
        label={UI.createStreamerForm.descriptionLabel}
        withAsterisk
        minRows={3}
        mt="md"
        maxLength={300}
        {...form.getInputProps('description')}
      />
      <Button type="submit" fullWidth mt="md" disabled={disabled}>
        {UI.createStreamerForm.buttonSubmitText}
      </Button>
    </Box>
  );
};
export { AddStreamerForm };
