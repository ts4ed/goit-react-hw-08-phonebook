import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import NavLinks from './AppBar/AppBar';
function Layout() {
  return (
    <div>
      <NavLinks />
      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
