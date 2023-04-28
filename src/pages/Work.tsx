import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Work.module.css';
import RightArrow from '../assets/RightArrow.svg';
import { projects } from '../data/projects';

function WorkPage() {
  const [countries, setCountries] = useState(false);
  const [bulls, setBulls] = useState(false);
  const [momentum, setMomentum] = useState(false);
  const [art, setArt] = useState(false);
  const workItemStyle =
    'flex flex-row flex-nowrap cursor-pointer justify-between items-center group';
  const workItemTitle = 'py-6 text-2xl font-bold flex flex-row gap-2';
  const workItemStyleAnime = 'animate-freeItem group-hover:animate-hoverItem';

  // check this interface for implementation
  // interface projectsStateType {
  //   countries: boolean;
  //   bulls: boolean;
  //   momentum: boolean;
  //   art: boolean;
  // }

  const projectsStateSet: any = {
    countries: countries,
    bulls: bulls,
    momentum: momentum,
    art: art,
  };

  type workId = 'countries' | 'art' | 'momentum' | 'bulls';

  const onMouseEnter: any = (id: workId) => {
    if (id === 'countries') setCountries(true);
    if (id === 'art') setArt(true);
    if (id === 'momentum') setMomentum(true);
    if (id === 'bulls') setBulls(true);
  };

  const onMouseLeave: any = (id: workId) => {
    if (id === 'countries') setCountries(false);
    if (id === 'art') setArt(false);
    if (id === 'momentum') setMomentum(false);
    if (id === 'bulls') setBulls(false);
  };

  return (
    <div className="w-full min-h-screen grid grid-rows-1 items-end">
      <div className="w-full h-[70%] flex flex-row flex-nowrap gap-16">
        <div className="w-1/2 h-full relative rounded-tr-[3rem] overflow-hidden">
          {projects.map((project) => {
            return (
              <img
                key={project.id}
                src={project.svg}
                alt={`${project.id} app`}
                className={`absolute left-0 bottom-0 h-full w-full invisible transition ease-linear ${
                  !projectsStateSet[project.id]
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
                    // className={workItemStyle}
                    onMouseEnter={() => onMouseEnter(project.id)}
                    onMouseLeave={() => onMouseLeave(project.id)}
                  >
                    <Link to={`${project.id}`} className={workItemStyle}>
                      <div className={workItemTitle}>
                        <img
                          src={RightArrow}
                          alt="arrow right"
                          className={`w-4 ${workItemStyleAnime}`}
                        />
                        <p className={`${workItemStyleAnime}`}>
                          {project.name === 'website' && (
                            <span className="italic font-normal">this.</span>
                          )}
                          {project.name}
                        </p>
                      </div>
                      <p className='text-lg'>{project.base_tech}</p>
                    </Link>
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
