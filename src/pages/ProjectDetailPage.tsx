import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ArrowUpRight from '../assets/ArrowUpRight.svg';
import ArrowUpRight_white from '../assets/ArrowUpRight_white.svg';
import { useSelector } from 'react-redux';
import { motion as mo } from 'framer-motion';
import {
  animeBasic,
  animeContainerStagger,
  animeItem,
} from '../data/animation';

function ProjectDetailPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const langStore = useSelector((state: any) => state.language);
  const modeStore = useSelector((state: any) => state.mode);

  const params = useParams();
  const project = projects.filter((item) => item.id === params.projectId)[0];

  const backBtnStyle = 'text-2xl italic hover:-translate-x-1 transition';

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
            // transition={{ duration: 1 }}
            className="w-full h-[600px] overflow-hidden rounded-b-[2.5rem]"
          >
            <img
              src={project.svg}
              alt={`${project.id} app image`}
              className="w-full"
            />
          </mo.div>
          <div className="overflow-hidden">
            <mo.div
              variants={animeItem}
              className="h-fit pb-6 border-solid border-0 border-b-2 flex flex-row flex-nowrap justify-between items-baseline "
            >
              <h1 className="text-5xl font-bold mt-8 uppercase">
                {project.name}
              </h1>
              <Link to=".." relative="path">
                {langStore === 'en' && (
                  <mo.p variants={animeBasic} className={backBtnStyle}>
                    back
                  </mo.p>
                )}
                {langStore === 'ru' && (
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
              className="grid grid-cols-[25%_1fr] gap-4 mt-4 text-xl"
            >
              {langStore === 'en' && (
                <mo.div
                  variants={animeBasic}
                  className="uppercase font-semibold"
                >
                  about
                </mo.div>
              )}
              {langStore === 'ru' && (
                <mo.div
                  variants={animeBasic}
                  className="uppercase font-semibold"
                >
                  о проекте
                </mo.div>
              )}
              {langStore === 'en' && (
                <mo.div variants={animeBasic} className="">
                  {project.about}
                </mo.div>
              )}
              {langStore === 'ru' && (
                <mo.div variants={animeBasic} className="">
                  {project.about_ru}
                </mo.div>
              )}
              {langStore === 'en' && (
                <mo.div
                  variants={animeBasic}
                  className="uppercase font-semibold"
                >
                  technologies
                </mo.div>
              )}
              {langStore === 'ru' && (
                <mo.div
                  variants={animeBasic}
                  className="uppercase font-semibold"
                >
                  Технологии
                </mo.div>
              )}
              <div className="">{project.tech_stack}</div>
              <div></div>
              <div className="flex flex-row flex-nowrap gap-10">
                {project.url && (
                  <div className="my_underline flex flex-row flex-nowrap gap-2 items-end">
                    <img
                      src={
                        modeStore === 'dark' ? ArrowUpRight_white : ArrowUpRight
                      }
                      alt="arrow up right"
                      className="w-[18px]"
                    />
                    {langStore === 'en' && (
                      <mo.div
                        variants={animeBasic}
                        className="font-semibold italic"
                      >
                        <a href={project.url} target="_blanc">
                          view project
                        </a>
                      </mo.div>
                    )}
                    {langStore === 'ru' && (
                      <mo.div
                        variants={animeBasic}
                        className="font-semibold italic"
                      >
                        <a href={project.url} target="_blanc">
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
                      className="w-[18px]"
                    />
                    {langStore === 'en' && (
                      <mo.div
                        variants={animeBasic}
                        className="font-semibold italic"
                      >
                        <a href={project.code} target="_blanc">
                          view code
                        </a>
                      </mo.div>
                    )}
                    {langStore === 'ru' && (
                      <mo.div
                        variants={animeBasic}
                        className="font-semibold italic"
                      >
                        <a href={project.code} target="_blanc">
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
