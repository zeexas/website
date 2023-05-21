import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion as mo } from 'framer-motion';

import { projects } from '../data/projects';
import ArrowUpRight from '../assets/ArrowUpRight.svg';
import ArrowUpRight_white from '../assets/ArrowUpRight_white.svg';
import {
  animeBasic,
  animeContainerStagger,
  animeItem,
  animeItemImage,
} from '../data/animation';
import { storeState } from '../store';

function ProjectDetailPage() {
  const showMenu = useSelector((state: storeState) => state.showMenu);
  const langStore = useSelector((state: storeState) => state.language);
  const modeStore = useSelector((state: storeState) => state.mode);

  const params = useParams();
  const project = projects.filter((item) => item.id === params.projectId)[0];

  const backBtnStyle =
    'text-base sm:text-lg md:text-xl italic hover:-translate-x-1 transition';
  const projectLinkStyle = 'font-semibold italic';
  const projectSubtitleStyle = 'uppercase font-semibold';
  const projectDescriptionStyle = 'pl-10 sm:pl-0';
  const linkArrowStyle = 'w-[12px] md:w-[18px]';

  return (
    <>
      {!showMenu && (
        <mo.div
          variants={animeContainerStagger}
          initial={'hidden'}
          animate={'show'}
          className={`w-full px-[5%] md:px-[7%] lg:px-[15%] xl:px-[20%] min-h-screen flex flex-col 
            pb-6 md:pb-8 lg:pb-12 pt-20 md:pt-28 lg:pt-0`}
        >
          <mo.img
            variants={animeItemImage}
            src={project.svg}
            alt={`${project.id} app image`}
            className={`w-full lg:h-[75vh] rounded-[1.8rem] md:rounded-[2rem] lg:rounded-b-[2.5rem] lg:rounded-t-none 
              object-cover object-top drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
          />
          <div className="overflow-hidden">
            <mo.div
              variants={animeItem}
              className={`h-fit pb-2 sm:pb-4 md:pb-6 border-solid border-0 border-b-2 
                flex flex-row flex-nowrap justify-between items-baseline`}
            >
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-6 md:mt-10 lg:mt-12 uppercase`}>
                {project.name}
              </h1>
              <Link to=".." relative="path">
                {langStore === 'ru' && (
                  <mo.p variants={animeBasic} className={backBtnStyle}>
                    back
                  </mo.p>
                )}
                {langStore === 'en' && (
                  <mo.p variants={animeBasic} className={backBtnStyle}>
                    назад
                  </mo.p>
                )}
              </Link>
            </mo.div>
          </div>
          <div className="overflow-hidden">
            <mo.div
              variants={animeItem}
              className="grid sm:grid-cols-[25%_1fr] gap-2 md:gap-4 mt-4 md:mt-6 text-xs sm:text-sm md:text-base lg:text-lg"
            >
              {langStore === 'ru' && (
                <mo.div variants={animeBasic} className={projectSubtitleStyle}>
                  about
                </mo.div>
              )}
              {langStore === 'en' && (
                <mo.div variants={animeBasic} className={projectSubtitleStyle}>
                  о проекте
                </mo.div>
              )}
              {langStore === 'ru' && (
                <mo.div
                  variants={animeBasic}
                  className={projectDescriptionStyle}
                >
                  {project.about}
                </mo.div>
              )}
              {langStore === 'en' && (
                <mo.div
                  variants={animeBasic}
                  className={projectDescriptionStyle}
                >
                  {project.about_ru}
                </mo.div>
              )}
              {langStore === 'ru' && (
                <mo.div variants={animeBasic} className={projectSubtitleStyle}>
                  technologies
                </mo.div>
              )}
              {langStore === 'en' && (
                <mo.div variants={animeBasic} className={projectSubtitleStyle}>
                  Технологии
                </mo.div>
              )}
              <div className={projectDescriptionStyle}>
                {project.tech_stack}
              </div>
              <div></div>
              <div className={`flex flex-row flex-nowrap gap-10 ${projectDescriptionStyle}`}>
                {project.url && (
                  <div className="my_underline flex flex-row flex-nowrap gap-2 items-end">
                    <img
                      src={
                        modeStore === 'dark' ? ArrowUpRight_white : ArrowUpRight
                      }
                      alt="arrow up right"
                      className={linkArrowStyle}
                    />
                    {langStore === 'ru' && (
                      <mo.div
                        variants={animeBasic}
                        className={projectLinkStyle}
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          view project
                        </a>
                      </mo.div>
                    )}
                    {langStore === 'en' && (
                      <mo.div
                        variants={animeBasic}
                        className={projectLinkStyle}
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          к проекту
                        </a>
                      </mo.div>
                    )}
                  </div>
                )}
                {project.code && (
                  <div className="my_underline flex flex-row flex-nowrap gap-2 items-end mt-2">
                    <img
                      src={
                        modeStore === 'dark' ? ArrowUpRight_white : ArrowUpRight
                      }
                      alt="arrow up right"
                      className={linkArrowStyle}
                    />
                    {langStore === 'ru' && (
                      <mo.div
                        variants={animeBasic}
                        className={projectLinkStyle}
                      >
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          view code
                        </a>
                      </mo.div>
                    )}
                    {langStore === 'en' && (
                      <mo.div
                        variants={animeBasic}
                        className={projectLinkStyle}
                      >
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          глянуть код
                        </a>
                      </mo.div>
                    )}
                  </div>
                )}
              </div>
            </mo.div>
          </div>
        </mo.div>
      )}
    </>
  );
}

export default ProjectDetailPage;
