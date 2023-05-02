import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import { AnimatePresence } from 'framer-motion';
import { darkStyle_base, darkStyle_bg } from '../data/styleVars';

function RootLayout() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const mode = useSelector((state: any) => state.mode);

  return (
    <div className={mode}>
      <Header />
      <main className={`${darkStyle_base} ${darkStyle_bg}`}>
        {/* <AnimatePresence> */}
        {showMenu && <Navigation />}
        <Outlet />
        {/* </AnimatePresence> */}
      </main>
    </div>
  );
}

export default RootLayout;
