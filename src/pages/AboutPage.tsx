import { useSelector } from 'react-redux';
import About from '../components/about/About';

function AboutPage() {
  const showMenu = useSelector((state: any) => state.showMenu);

  return (
    <>
      {!showMenu && (
        <div className="w-full min-h-screen flex justify-center items-center">
          <About />
        </div>
      )}
    </>
  );
}

export default AboutPage;
