import { motion as mo } from 'framer-motion';
import {
  animeBasic,
  animeContainerStagger,
  animeItem,
} from '../data/animation';
import { useSelector } from 'react-redux';
import { storeState } from '../store';

function Intro() {
  const langStore = useSelector((state: storeState) => state.language);

  const getRandom = (n: number) => {
    return Math.floor(Math.random() * n);
  };

  const shuffle = (word: string) => {
    const arr = word.split('');
    const n = arr.length;

    for (let i = 0; i < (n - 1); ++i) {
      const j = getRandom(n);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    word = arr.join('');
    return word;
  };

  return (
    <mo.section
      variants={animeContainerStagger}
      initial={'hidden'}
      animate={'show'}
      className={`w-[80%] bg-slate-0 h-1/2 text-center absolute top-[35%] left-[50%] -translate-x-1/2 my-auto p-6`}
    >
      <div className="overflow-hidden p-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
        {langStore === 'ru' && (
          <mo.p variants={animeItem}>Hi, I am Valery Li</mo.p>
        )}
        {langStore === 'en' && (
          <mo.p variants={animeItem}>Привет, меня зовут Валерий!</mo.p>
        )}
      </div>
      <div className="overflow-hidden mt-6 text-sm sm:text-base md:text-xl lg:text-2xl">
        {langStore === 'ru' && (
          <mo.p variants={animeItem}>I'm a front-end engineer</mo.p>
        )}
        {langStore === 'en' && (
          <mo.p variants={animeItem}>Я - фронтенд разработчик</mo.p>
        )}
      </div>
      <div className="absolute -bottom-14 text-xs sm:text-sm overflow-hidden">
        {langStore === 'ru' && (
          <mo.div variants={animeBasic}>
            {shuffle('design')} {shuffle('is')} {shuffle('under')}{' '}
            {shuffle('development')}...
          </mo.div>
        )}
        {langStore === 'en' && (
          <mo.div variants={animeBasic}>
            {shuffle('дизайн')} в {shuffle('разработке')}...
          </mo.div>
        )}
      </div>
    </mo.section>
  );
}

export default Intro;
