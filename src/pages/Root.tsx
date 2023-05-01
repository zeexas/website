import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import { AnimatePresence } from 'framer-motion';

function RootLayout() {
  const showMenu = useSelector((state: any) => state.showMenu);

  return (
    <>
      <Header />
      <main>
        <AnimatePresence>
          {showMenu && <Navigation />}
          <Outlet />
        </AnimatePresence>
      </main>
    </>
  );
}

export default RootLayout;
