import { notifications } from '@mantine/notifications';
import { ExclamationMark } from 'tabler-icons-react';

const showErrorNotification = (message: string) => {
  notifications.show({
    id: 'api-error',
    loading: false,
    message,
    autoClose: 3000,
    color: 'red',
    icon: <ExclamationMark size="3rem" color="black" />,
    style: { backgroundColor: '#fa5252' },
  });
};

export { showErrorNotification };
