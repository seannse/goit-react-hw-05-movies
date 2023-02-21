// import { Loader } from 'components';
import AppBar from 'components/AppBar/AppBar';
// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar />
      {/* <Suspense fallback={<Loader />}> */}
      <main>
        <Outlet />
      </main>
      {/* </Suspense> */}
    </div>
  );
};

export default Layout;
