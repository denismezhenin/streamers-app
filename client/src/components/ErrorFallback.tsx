import { Button } from '@mantine/core';
import { useErrorBoundary } from 'react-error-boundary';
import { UI } from '../constants/UI';

function ErrorFallback({ error }: { error: Error }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert">
      <p>{UI.errorBoundary.message}</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <Button onClick={resetBoundary}>{UI.errorBoundary.buttonText}</Button>
    </div>
  );
}

export { ErrorFallback };
