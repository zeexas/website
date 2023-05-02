import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ArrowUpRight from '../assets/ArrowUpRight.svg';
import { useSelector } from 'react-redux';
import { motion as mo } from 'framer-motion';
import { animeContainerStagger, animeItem } from '../animation';

function ProjectDetailPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const langStore = useSelector((state: any) => state.language);

  const params = useParams();
  const project = projects.filter((item) => item.id === params.projectId)[0];

  return (
    <>
      {!showMenu && (
        <mo.div
          variants={animeContainerStagger}
          initial={'hidden'}
          animate={'show'}
          className="w-[60%] mx-auto min-h-screen flex flex-col pb-12"
        >
          <mo.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1}}
            className="w-full h-[600px] overflow-hidden rounded-b-[2.5rem]"
          >
            <img
              src={project.svg}
              alt={`${project.id} app image`}
              className="w-full"
            />
          </mo.div>
          <div className="overflow-hidden">
            <mo.div variants={animeItem} className='h-fit pb-6 border-solid border-0 border-slate-500 border-b-2 flex flex-row flex-nowrap justify-between items-baseline '>
              <h1 className="text-5xl font-bold mt-8 uppercase">
                {project.name}
              </h1>
              <Link to=".." relative="path">
                {langStore === 'en' && <mo.p initial={{opacity: 0}} animate={{opacity: 1}} className="text-2xl italic hover:-translate-x-1 transition">
                  back
                </mo.p>}
                {langStore === 'ru' && <mo.p initial={{opacity: 0}} animate={{opacity: 1}} className="text-2xl italic hover:-translate-x-1 transition">
                  назад
                </mo.p>}
              </Link>
            </mo.div>
          </div>
          <div className='overflow-hidden'>
            <mo.div variants={animeItem} className="grid grid-cols-[25%_1fr] gap-4 mt-4 text-xl">
              {langStore === 'en' && <mo.div initial={{opacity: 0}} animate={{opacity: 1}} className="uppercase font-semibold">about</mo.div>}
              {langStore === 'ru' && <mo.div initial={{opacity: 0}} animate={{opacity: 1}} className="uppercase font-semibold">о проекте</mo.div>}
              {langStore === 'en' && <mo.div initial={{opacity: 0}} animate={{opacity: 1}} className="">{project.about}</mo.div>}
              {langStore === 'ru' && <mo.div initial={{opacity: 0}} animate={{opacity: 1}} className="">{project.about_ru}</mo.div>}
              {langStore === 'en' && <mo.div initial={{opacity: 0}} animate={{opacity: 1}} className="uppercase font-semibold">technologies</mo.div>}
              {langStore === 'ru' && <mo.div initial={{opacity: 0}} animate={{opacity: 1}} className="uppercase font-semibold">Технологии</mo.div>}
              <div className="">{project.tech_stack}</div>
              <div></div>
              {project.url && (
                <div className="my_underline flex flex-row flex-nowrap gap-2 items-end">
                  <img
                    src={ArrowUpRight}
                    alt="arrow up right"
                    className="w-[18px]"
                  />
                  {langStore === 'en' && <mo.div initial={{opacity: 0}} animate={{opacity: 1}} className="font-bold italic">
                    <a href={project.url} target="_blanc">
                      view project
                    </a>
                  </mo.div>}
                  {langStore === 'ru' && <mo.div initial={{opacity: 0}} animate={{opacity: 1}} className="font-bold italic">
                    <a href={project.url} target="_blanc">
                      к проекту
                    </a>
                  </mo.div>}
                </div>
              )}
            </mo.div>
          </div>
        </mo.div>
      )}
    </>
  );
}

export default ProjectDetailPage;
