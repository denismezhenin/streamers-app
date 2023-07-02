import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import { lazy } from 'react';
const MainPage = lazy(() => import('../components/pages/main/Main'));
const StreamerPage = lazy(() => import('../components/pages/streamer/StreamerPage'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="streamer/:id" element={<StreamerPage />} />
      </Route>
    </Routes>
  );
};
export { Router };
