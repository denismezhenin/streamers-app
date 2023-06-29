import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './utils/router';

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
