import { motion as mo } from 'framer-motion';
import { animeContainerStagger, animeItem } from '../data/animation';
import { useSelector } from 'react-redux';

function Intro() {
  const langStore = useSelector((state: any) => state.language);
  
  return (
    <mo.section
      variants={animeContainerStagger}
      initial={'hidden'}
      animate={'show'}
      className={`text-center absolute top-[35%] left-[50%] -translate-x-1/2 my-auto p-6`}
    >
      <div className="overflow-hidden p-2">
        {langStore === 'en' && <mo.p variants={animeItem} className="text-6xl">
          Hi, I am Valery Li
        </mo.p>}
        {langStore === 'ru' && <mo.p variants={animeItem} className="text-6xl">
          Привет, меня зовут Валерий!
        </mo.p>}
      </div>
      <div className="overflow-hidden mt-6">
        {langStore === 'en' && <mo.p variants={animeItem} className="text-2xl">
          I'm a front-end engineer
        </mo.p>}
        {langStore === 'ru' && <mo.p variants={animeItem} className="text-2xl">
          Я фронт-энд разработчик
        </mo.p>}
      </div>
    </mo.section>
  );
}

export default Intro;
