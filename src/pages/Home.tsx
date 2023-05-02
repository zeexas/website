import { useSelector } from 'react-redux';
import Intro from '../components/Intro';

function HomePage() {
  const showMenu = useSelector((state: any) => state.showMenu);

  return (
    <>
      {!showMenu && (
        <div className="w-full min-h-screen">
          <Intro />
        </div>
      )}
    </>
  );
}

export default HomePage;
