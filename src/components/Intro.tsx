import { motion } from 'framer-motion';
import { animeContainerStagger, animeItem } from '../animation';
import { useSelector } from 'react-redux';

function Intro() {
  const langStore = useSelector((state: any) => state.language);
  console.log('From Intro - ' + langStore);
  
  return (
    <motion.section
      variants={animeContainerStagger}
      initial={'hidden'}
      animate={'show'}
      className="text-center absolute top-[35%] left-[50%] -translate-x-1/2 my-auto p-6"
    >
      <div className="overflow-hidden p-2">
        {langStore === 'en' && <motion.p variants={animeItem} className="text-5xl">
          Hi, I am Valery Li
        </motion.p>}
        {langStore === 'ru' && <motion.p variants={animeItem} className="text-5xl">
          Привет, меня зовут Валерий!
        </motion.p>}
      </div>
      <div className="overflow-hidden">
        {langStore === 'en' && <motion.p variants={animeItem} className="text-xl mt-4">
          I'm a front-end engineer
        </motion.p>}
        {langStore === 'ru' && <motion.p variants={animeItem} className="text-xl mt-4">
          Я фронт-энд разработчик
        </motion.p>}
      </div>
    </motion.section>
  );
}

export default Intro;
