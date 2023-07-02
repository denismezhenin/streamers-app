import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout';
import { MainPage } from '../components/pages/main/Main';
import { StreamerPage } from '../components/pages/streamer/StreamerPage';
import { lazy } from 'react';


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
