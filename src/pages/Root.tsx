import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function RootLayout() {
  return (
    <>
      <Header />
      <main className='h-screen relative bg-teal-100'>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
