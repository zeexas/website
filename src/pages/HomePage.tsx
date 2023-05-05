import { useSelector } from 'react-redux';

import Intro from '../components/Intro';
import { storeState } from '../store';

function HomePage() {
  const showMenu = useSelector((state: storeState) => state.showMenu);

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
