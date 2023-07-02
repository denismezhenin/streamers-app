import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './utils/router';
import { ErrorBoundary } from 'react-error-boundary';
import { StrictMode } from 'react';
import { ErrorFallback } from './components/ErrorFallback';

function App() {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Notifications position="bottom-right" zIndex={10} />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </MantineProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default App;
