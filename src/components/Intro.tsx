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
      className={`w-[80%] text-center absolute top-[35%] left-[50%] -translate-x-1/2 my-auto p-6`}
    >
      <div className="overflow-hidden p-2 text-6xl">
        {langStore === 'en' && <mo.p variants={animeItem} className="">
          Hi, I am Valery Li
        </mo.p>}
        {langStore === 'ru' && <mo.p variants={animeItem} className="">
          Привет, меня зовут Валерий!
        </mo.p>}
      </div>
      <div className="overflow-hidden mt-6 text-2xl">
        {langStore === 'en' && <mo.p variants={animeItem} className="">
          I'm a front-end engineer
        </mo.p>}
        {langStore === 'ru' && <mo.p variants={animeItem} className="">
          Я фронтенд разработчик
        </mo.p>}
      </div>
    </mo.section>
  );
}

export default Intro;
