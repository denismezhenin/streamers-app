import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { AppLoader } from './loader';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<AppLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
