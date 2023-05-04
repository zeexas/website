import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import { darkStyle_base, darkStyle_bg } from '../data/styleVars';
import { storeState } from '../store';

function RootLayout() {
  const showMenu = useSelector((state: storeState) => state.showMenu);
  const mode = useSelector((state: storeState) => state.mode);

  return (
    <div className={mode}>
      <Header />
      <main className={`${darkStyle_base} ${darkStyle_bg}`}>
        {showMenu && <Navigation />}
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
