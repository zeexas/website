import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { AnimatePresence, motion as mo } from 'framer-motion';
import { darkStyle_bg } from '../data/styleVars';
import { darkStyle_base } from '../data/styleVars';

function ErrorPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const langStore = useSelector((state: any) => state.language);
  const mode = useSelector((state: any) => state.mode);

  // TODO finish refactoring
  // const langText = {
  //   en: {
  //     title: 'An error occurred!',
  //     text: 'Could not find this page!',
  //   },
  //   ru: {
  //     title: 'Ошибка!',
  //     text: 'СТраница не найдена!',
  //   },
  // }
  const error_style = `w-full min-h-screen flex flex-col gap-4 items-center justify-center text-center text-3xl font-bold`;

  return (
    <div className={`w-full h-screen ${mode}`}>
      <Header />
      <section className={`w-full h-full ${darkStyle_bg} ${darkStyle_base}`}>
        {/* <AnimatePresence mode="wait"> */}
        {showMenu && <Navigation />}
        {!showMenu && langStore === 'en' && (
          <mo.main
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={error_style}
          >
            <h1>An error occurred!</h1>
            <p>Could not find this page!</p>
          </mo.main>
        )}
        {!showMenu && langStore === 'ru' && (
          <mo.main
            key="error_ru"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={error_style}
          >
            <h1>Ошибка!</h1>
            <p>Страница не найдена!</p>
          </mo.main>
        )}
        {/* </AnimatePresence> */}
      </section>
    </div>
  );
}

export default ErrorPage;
