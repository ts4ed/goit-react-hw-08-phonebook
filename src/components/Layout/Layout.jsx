import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import NavLinks from '../AppBarComponents/AppBar/AppBar';
import { motion } from 'framer-motion';
import { Main } from './Layout.styled';
import { Footer } from './Footer/Footer';

function Layout() {
  return (
    <div>
      <NavLinks />

      <Main>
        <Suspense fallback={<p>Loading</p>}>
          <Outlet />
        </Suspense>
      </Main>

      <motion.div
        initial={{ y: +50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Layout;
