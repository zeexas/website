import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

function ErrorPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  
  return (
    <div className='w-full min-h-screen'>
      <Header />
      {showMenu && <Navigation />}
      {!showMenu && <main className="w-full min-h-screen flex flex-col gap-4 items-center justify-center text-center text-3xl font-bold">
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>}
    </div>
  );
}

export default ErrorPage;
