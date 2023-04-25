import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function RootLayout() {
  return (
    <>
      <Header />
      <main className='h-screen relative bg-cyan-50'>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
