import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';

function RootLayout() {
  const showMenu = useSelector((state: any) => state.showMenu);
  
  return (
    <>
      <Header />
      {showMenu && <Navigation />}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
