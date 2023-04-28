import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ArrowUpRight from '../assets/ArrowUpRight.svg';

function ProjectDetailPage() {
  const params = useParams();
  const project = projects.filter((item) => item.id === params.projectId)[0];

  return (
    <>
      <div className="w-[60%] mx-auto min-h-screen flex flex-col pb-12">
        <div className="w-full h-[600px] overflow-hidden rounded-b-[2.5rem]">
          <img
            src={project.svg}
            alt={`${project.id} app image`}
            className="w-full"
          />
        </div>
        <div className="pb-6 border-solid border-0 border-slate-500 border-b-2 flex flex-row flex-nowrap justify-between items-baseline">
          <h1 className="text-5xl font-bold mt-8 uppercase">{project.name}</h1>
          <Link to=".." relative="path">
            <p className="text-2xl italic hover:-translate-x-1 transition">back</p>
          </Link>
        </div>
        <div className="grid grid-cols-[25%_1fr] gap-4 mt-4 text-xl">
          <div className="uppercase font-semibold">about</div>
          <div className="">{project.about}</div>
          <div className="uppercase font-semibold">technologies</div>
          <div className="">{project.tech_stack}</div>
          <div></div>
          {project.url && (
            <div className="my_underline flex flex-row flex-nowrap gap-2 items-end">
              <img
                src={ArrowUpRight}
                alt="arrow up right"
                className="w-[18px]"
              />
              <div className="font-bold italic">
                <a href={project.url} target="_blanc">
                  view project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectDetailPage;
