import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { AnimatePresence, motion } from 'framer-motion';

function ErrorPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const langStore = useSelector((state: any) => state.language);

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

  return (
    <div className="w-full min-h-screen">
      <Header />
      <AnimatePresence mode="wait">
        {showMenu && <Navigation />}
        {!showMenu && langStore === 'en' && (
          <motion.main
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full min-h-screen flex flex-col gap-4 items-center justify-center text-center text-3xl font-bold"
          >
            <h1>An error occurred!</h1>
            <p>Could not find this page!</p>
          </motion.main>
        )}
        {!showMenu && langStore === 'ru' && (
          <motion.main
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full min-h-screen flex flex-col gap-4 items-center justify-center text-center text-3xl font-bold"
          >
            <h1>Ошибка!</h1>
            <p>Страница не найдена!</p>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ErrorPage;
