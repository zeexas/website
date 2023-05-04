import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { easeOut, motion as mo } from 'framer-motion';

import classes from './Work.module.css';
import RightArrow from '../assets/RightArrow.svg';
import RightArrow_white from '../assets/RightArrow_white.svg';
import { projects } from '../data/projects';
import { animeContainerStagger, animeItem } from '../data/animation';

function WorkPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const langStore = useSelector((state: any) => state.language);
  const modeStore = useSelector((state: any) => state.mode);

  const [countries, setCountries] = useState(false);
  const [report, setReport] = useState(false);
  const [website, setWebsite] = useState(false);
  const [bulls, setBulls] = useState(false);
  const [momentum, setMomentum] = useState(false);
  const [art, setArt] = useState(false);

  const titleStyle = `text-3xl sm:text-4xl md:text-5xl font-bold uppercase pb-6 
    border-solid border-0 border-slate-500 border-b md:border-b-2`;
  const workItemStyle =
    'flex flex-row flex-nowrap cursor-pointer justify-between items-center group';
  const workItemTitle = 'py-3 sm:py-4 md:py-6 text-base sm:text-xl md:text-2xl font-bold flex flex-row gap-2';
  const workItemStyleAnime = 'animate-freeItem group-hover:animate-hoverItem';

  const projectsStateSet: any = {
    countries,
    report,
    website,
    bulls,
    momentum,
    art,
  };

  const onMouseEnter: any = (id: any) => {
    switch (id) {
      case 'countries':
        setCountries(true);
        break;
      case 'report':
        setReport(true);
        break;
      case 'website':
        setWebsite(true);
        break;
      case 'art':
        setArt(true);
        break;
      case 'momentum':
        setMomentum(true);
        break;
      case 'bulls':
        setBulls(true);
        break;
      default:
        break;
    }
  };

  const onMouseLeave: any = (id: any) => {
    switch (id) {
      case 'countries':
        setCountries(false);
        break;
      case 'report':
        setReport(false);
        break;
      case 'website':
        setWebsite(false);
        break;
      case 'art':
        setArt(false);
        break;
      case 'momentum':
        setMomentum(false);
        break;
      case 'bulls':
        setBulls(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {!showMenu && (
        <div className="w-full min-h-screen grid grid-rows-1 items-end">
          <mo.div
            variants={animeContainerStagger}
            initial={'hidden'}
            animate={'show'}
            className="w-full h-[70%] flex flex-row flex-nowrap gap-16"
          >
            <mo.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`hidden lg:block lg:w-1/2 h-full relative rounded-tr-[3rem] 
                overflow-hidden drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
            >
              {projects.map((project) => {
                return (
                  <mo.img
                    initial={
                      !projectsStateSet[project.id]
                        ? { opacity: 0, visibility: 'hidden' }
                        : { opacity: 1, visibility: 'visible' }
                    }
                    animate={
                      projectsStateSet[project.id]
                        ? {
                            opacity: 1,
                            visibility: 'visible',
                          }
                        : {
                            opacity: 0,
                            visibility: 'hidden',
                          }
                    }
                    transition={{ ease: 'easeOut', duration: 0.5 }}
                    key={project.id}
                    src={project.svg}
                    alt={`${project.id} app`}
                    className={`absolute left-0 bottom-0 h-full w-full opacity-0 invisible object-cover object-top`}
                  />
                );
              })}
            </mo.div>

            <div className="w-[80%] mx-auto lg:w-1/2 h-full">
              <div className="lg:w-[75%] h-full flex flex-col">
                <div className="overflow-hidden pb-4">
                  {langStore === 'en' && (
                    <mo.h3 variants={animeItem} className={titleStyle}>
                      Projects
                    </mo.h3>
                  )}
                  {langStore === 'ru' && (
                    <mo.h3 variants={animeItem} className={titleStyle}>
                      Проекты
                    </mo.h3>
                  )}
                </div>
                
                <ul
                  className={`w-full h-full overflow-auto ${classes.works_list}`}
                >
                  {projects.map((project) => {
                    return (
                      <li
                        key={project.id}
                        className="overflow-hidden"
                        onMouseEnter={() => onMouseEnter(project.id)}
                        onMouseLeave={() => onMouseLeave(project.id)}
                      >
                        <mo.div
                          variants={animeItem}
                          className="border-solid border-0 border-slate-500 border-b md:border-b-2"
                        >
                          <Link to={`${project.id}`} className={workItemStyle}>
                            <div className={workItemTitle}>
                              <img
                                src={
                                  modeStore === 'dark'
                                    ? RightArrow_white
                                    : RightArrow
                                }
                                alt="arrow right"
                                className={`w-4 ${workItemStyleAnime}`}
                              />
                              <p className={`${workItemStyleAnime}`}>
                                {project.name === 'website' && (
                                  <span className="italic font-normal">
                                    this.
                                  </span>
                                )}
                                {project.name}
                              </p>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg">{project.base_tech}</p>
                          </Link>
                        </mo.div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </mo.div>
        </div>
      )}
    </>
  );
}

export default WorkPage;
