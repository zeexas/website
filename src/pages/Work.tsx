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
  const workItemTitle = 'py-6 text-2xl font-bold flex flex-row gap-2';
  const workItemStyleAnime = 'animate-freeItem group-hover:animate-hoverItem';

  const projects = [
    {
      id: 'countries',
      name: 'rest-countries',
      tech: 'vue.js',
      svg: Countries,
      state: showCountries,
    },
    {
      id: 'art',
      name: 'art-quiz',
      tech: 'vanilla.js',
      svg: ArtQuiz,
      state: showArtquiz,
    },
    {
      id: 'momentum',
      name: 'momentum',
      tech: 'vanilla.js',
      svg: Momentum,
      state: showMomentum,
    },
    {
      id: 'bulls',
      name: 'bulls and cows',
      tech: 'vanilla.js',
      svg: Bulls,
      state: showBulls,
    },
  ];
  const onMouseEnter: any = (id: any) => {
    if (id === 'countries') setShowCountries(true);
    if (id === 'art') setShowArtquiz(true);
    if (id === 'momentum') setShowMomentum(true);
    if (id === 'bulls') setShowBulls(true);
  };

  const onMouseLeave: any = (id: any) => {
    if (id === 'countries') setShowCountries(false);
    if (id === 'art') setShowArtquiz(false);
    if (id === 'momentum') setShowMomentum(false);
    if (id === 'bulls') setShowBulls(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-end">
      <div className="w-full h-[70%] flex flex-row flex-nowrap gap-16">
        <div className="w-1/2 h-full relative border-solid border-0 rounded-tr-[3rem] overflow-hidden">
          {projects.map((project) => {
            return (
              <img
                key={project.id}
                src={project.svg}
                alt={`${project.id} app`}
                className={`absolute left-0 bottom-0 h-full w-full transition ease-linear ${
                  !project.state
                    ? 'animate-hideWorkImage'
                    : 'animate-showWorkImage'
                }`}
              />
            );
          })}
        </div>

        <div className="w-1/2 h-full">
          <div className="w-[75%] h-full flex flex-col">
            <h3 className="text-5xl font-bold uppercase pb-6 border-solid border-0 border-slate-500 border-b-2">
              Projects
            </h3>
            <ul
              className={`w-full h-full divide-solid divide-x-0 divide-slate-500 divide-y-2 overflow-auto ${classes.works_list}`}
            >
              {projects.map((project) => {
                return (
                  <li
                    key={project.id}
                    className={workItemStyle}
                    onMouseEnter={() => onMouseEnter(project.id)}
                    onMouseLeave={() => onMouseLeave(project.id)}
                  >
                    <div className={workItemTitle}>
                      <img
                        src={RightArrow}
                        alt="arrow right"
                        className={`w-4 ${workItemStyleAnime}`}
                      />
                      <p className={`${workItemStyleAnime}`}>{project.name}</p>
                    </div>
                    <p>{project.tech}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
