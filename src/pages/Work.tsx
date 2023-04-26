import { useState } from 'react';

import classes from './Work.module.css';
import RightArrow from '../assets/RightArrow.svg';
import Countries from '../assets/work/countries.svg';
import Bulls from '../assets/work/BullCow.svg';
import Momentum from '../assets/work/Momentum.svg';
import ArtQuiz from '../assets/work/ArtQuiz.svg';

function WorkPage() {
  const [showCountries, setShowCountries] = useState(false);
  const [showBulls, setShowBulls] = useState(false);
  const [showMomentum, setShowMomentum] = useState(false);
  const [showArtquiz, setShowArtquiz] = useState(false);
  const workItemStyle =
    'flex flex-row flex-nowrap cursor-pointer justify-between items-center group';
  const workItemTitle =
    'py-6 text-2xl font-bold flex flex-row gap-2';
  const workItemStyleAnime =
    '-translate-x-6 group-hover:translate-x-0 transition duration-200';

  return (
    <div className="w-full h-full flex flex-col justify-end">
      <div className="w-full h-[70%] flex flex-row flex-nowrap gap-16">
        <div className="w-1/2 h-full border-solid border-0 rounded-tr-[3rem] overflow-hidden">
          <img
            src={Countries}
            alt="countries app"
            className={`h-full ${!showCountries ? 'hidden' : 'block'}`}
          />
          <img
            src={Bulls}
            alt="bulls-and-cows app"
            className={`h-full ${!showBulls ? 'hidden' : 'block'}`}
          />
          <img
            src={Momentum}
            alt="momentum app"
            className={`h-full ${!showMomentum ? 'hidden' : 'block'}`}
          />
          <img
            src={ArtQuiz}
            alt="art-quiz app"
            className={`h-full ${!showArtquiz ? 'hidden' : 'block'}`}
          />
        </div>

        <div className="w-1/2 h-full">
          <div className="w-[75%] h-full flex flex-col">
            <h3 className="text-5xl font-bold uppercase pb-6 border-solid border-0 border-slate-500 border-b-2">
              Projects
            </h3>
            <ul
              className={`w-full h-full divide-solid divide-x-0 divide-slate-500 divide-y-2 overflow-auto ${classes.works_list}`}
            >
              <li
                className={workItemStyle}
                onMouseEnter={() => setShowCountries(true)}
                onMouseLeave={() => setShowCountries(false)}
              >
                <div className={workItemTitle}>
                  <img
                    src={RightArrow}
                    alt="arrow right"
                    className={`w-4 ${workItemStyleAnime}`}
                  />
                  <p className={`${workItemStyleAnime}`}>rest-countries</p>
                </div>
                <p>vue.js</p>
              </li>
              <li
                className={workItemStyle}
                onMouseEnter={() => setShowBulls(true)}
                onMouseLeave={() => setShowBulls(false)}
              >
                <div className={workItemTitle}>
                  <img
                    src={RightArrow}
                    alt="arrow right"
                    className={`w-4 ${workItemStyleAnime}`}
                  />
                  <p className={`${workItemStyleAnime}`}>bulls and cows</p>
                </div>
                <p>vanilla.js</p>
              </li>
              <li
                className={workItemStyle}
                onMouseEnter={() => setShowMomentum(true)}
                onMouseLeave={() => setShowMomentum(false)}
              >
                <div className={workItemTitle}>
                  <img
                    src={RightArrow}
                    alt="arrow right"
                    className={`w-4 ${workItemStyleAnime}`}
                  />
                  <p className={`${workItemStyleAnime}`}>momentum</p>
                </div>
                <p>vanilla.js</p>
              </li>
              <li
                className={workItemStyle}
                onMouseEnter={() => setShowArtquiz(true)}
                onMouseLeave={() => setShowArtquiz(false)}
              >
                <div className={workItemTitle}>
                  <img
                    src={RightArrow}
                    alt="arrow right"
                    className={`w-4 ${workItemStyleAnime}`}
                  />
                  <p className={`${workItemStyleAnime}`}>art-quiz</p>
                </div>
                <p>vanilla.js</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
