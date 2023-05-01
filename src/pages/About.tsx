import { useState } from 'react';
import DocumentArrowDown from '../assets/DocumentArrowDown.svg';
import Html from '../assets/techs/html-5.svg';
import Css from '../assets/techs/css-3.svg';
import Sass from '../assets/techs/sass.svg';
import Tailwind from '../assets/techs/tailwind.svg';
import MaterialUI from '../assets/techs/material-ui.svg';
import Bootstrap from '../assets/techs/bootstrap.svg';
// import FramerMotion from '../assets/techs/framer-motion.svg';
import Javascript from '../assets/techs/js.svg';
import Typescript from '../assets/techs/typescript.svg';
import Reactlogo from '../assets/techs/react.svg';
import Reduxlogo from '../assets/techs/redux.svg';
import Next from '../assets/techs/next-js.svg';
import Vuelogo from '../assets/techs/vue.svg';
import Git from '../assets/techs/git.svg';
import Github from '../assets/techs/github.svg';
import VScode from '../assets/techs/vscode.svg';
import Figma from '../assets/techs/figma.svg';
import Postgresql from '../assets/techs/postgresql.svg';
import Strapi from '../assets/techs/strapi.svg';
import Nest from '../assets/techs/nestjs.svg';
import Postman from '../assets/techs/postman.svg';
import Prisma from '../assets/techs/prisma-2.svg';
import Nodejs from '../assets/techs/nodejs.svg';
import Npm from '../assets/techs/Npm-logo.svg';
import Yarn from '../assets/techs/yarn.svg';
import Webpack from '../assets/techs/webpack.svg';
import Vite from '../assets/techs/vitejs.svg';
import Stripe from '../assets/techs/stripe.svg';
import { useSelector } from 'react-redux';
import { motion as mo } from 'framer-motion';
import { animeContainerStagger, animeItem } from '../animation';

function AboutPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const [aboutTech, setAboutTech] = useState(false);

  const iconStyle =
    'w-[40px] h-[40px] cursor-pointer grayscale hover:grayscale-0 hover:scale-125 transition duration-200';
  const iconBlock = 'w-[100%] flex flex-row flex-wrap gap-x-10 gap-y-6 mt-6';

  const handleClick = () => {
    setAboutTech(!aboutTech);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {!showMenu && (
        <mo.div
          variants={animeContainerStagger}
          initial={'hidden'}
          animate={'show'}
          className="w-[65%] h-[50%] text-teal-700 text-[1.3rem] overflow-hidden"
        >
          <div className="w-full h-full flex flex-col">
            <div className="overflow-hidden">
              <mo.h2
                variants={animeItem}
                className="text-5xl uppercase font-bold pb-4 border-solid border-0 border-b-2 border-teal-700"
              >
                About
              </mo.h2>
            </div>
            <mo.div
              initial={{ opacity: 0, translateY: '-30%' }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              exit={{ opacity: 0 }}
            >
              {!aboutTech && (
                <mo.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-[80%] mt-8"
                >
                  Hi, my name is Valery Li and I'm a front-end engineer who has
                  experience in building back-end infrastructure too. I also
                  have wide experience (10+ years) in finance creating budgets
                  and financial statements and understand all business processes
                  in companies. I am passionate about learning new technologies
                  and finding solutions in non-standard tasks. In my childhood I
                  was crazy about chess, but now I prefer billiards more. <br />
                  My latest achivements: ~ created full-stack app prototype for
                  financial company ~ ran a half marathon in Almaty (april,
                  2023)
                </mo.section>
              )}
              {aboutTech && (
                <mo.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-8"
                >
                  <div>Technologies I use for creating web applications</div>
                  <div className={`${iconBlock} pl-2`}>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                      target="_blanc"
                    >
                      <img
                        src={Html}
                        alt="html-5 logo"
                        title="html"
                        className={iconStyle}
                      />
                    </a>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="_blanc"
                    >
                      <img
                        src={Css}
                        alt="css-3 logo"
                        title="css"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://sass-lang.com/" target="_blanc">
                      <img
                        src={Sass}
                        alt="sass logo"
                        title="sass"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blanc">
                      <img
                        src={Tailwind}
                        alt="tailwindcss logo"
                        title="tailwindcss"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://mui.com/" target="_blanc">
                      <img
                        src={MaterialUI}
                        alt="material-ui logo"
                        title="material-ui"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://getbootstrap.com/" target="_blanc">
                      <img
                        src={Bootstrap}
                        alt="bootstrap logo"
                        title="bootstrap"
                        className={iconStyle}
                      />
                    </a>
                    {/* <a href='https://www.framer.com/motion/' target='_blanc'>
                      <img src={FramerMotion} alt="framer-motion logo" title='framer-motion' className={iconStyle} />
                    </a> */}
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      target="_blanc"
                    >
                      <img
                        src={Javascript}
                        alt="javascript logo"
                        title="javascript"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blanc">
                      <img
                        src={Typescript}
                        alt="typescript logo"
                        title="typescript"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://react.dev/" target="_blanc">
                      <img
                        src={Reactlogo}
                        alt="react logo"
                        title="react"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://redux.js.org/" target="_blanc">
                      <img
                        src={Reduxlogo}
                        alt="redux logo"
                        title="redux"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://nextjs.org/" target="_blanc">
                      <img
                        src={Next}
                        alt="next.js logo"
                        title="next.js"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://vuejs.org/" target="_blanc">
                      <img
                        src={Vuelogo}
                        alt="vue logo"
                        title="vue"
                        className={iconStyle}
                      />
                    </a>
                  </div>
                  <div className={`${iconBlock} pl-2`}>
                    <a href="https://www.npmjs.com/" target="_blanc">
                      <img
                        src={Npm}
                        alt="npm logo"
                        title="npm"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://yarnpkg.com/" target="_blanc">
                      <img
                        src={Yarn}
                        alt="yarn logo"
                        title="yarn"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://git-scm.com/" target="_blanc">
                      <img
                        src={Git}
                        alt="git logo"
                        title="git"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://github.com/" target="_blanc">
                      <img
                        src={Github}
                        alt="github logo"
                        title="github"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://code.visualstudio.com/" target="_blanc">
                      <img
                        src={VScode}
                        alt="vscode logo"
                        title="vscode"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://www.figma.com/" target="_blanc">
                      <img
                        src={Figma}
                        alt="figma logo"
                        title="figma"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://www.postgresql.org/" target="_blanc">
                      <img
                        src={Postgresql}
                        alt="postgresql logo"
                        title="postgresql"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://strapi.io/" target="_blanc">
                      <img
                        src={Strapi}
                        alt="strapi logo"
                        title="strapi"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://nestjs.com/" target="_blanc">
                      <img
                        src={Nest}
                        alt="nest.js logo"
                        title="nest.js"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://nodejs.org/" target="_blanc">
                      <img
                        src={Nodejs}
                        alt="nodejs logo"
                        title="nodejs"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://www.postman.com/" target="_blanc">
                      <img
                        src={Postman}
                        alt="postman logo"
                        title="postman"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://www.prisma.io/" target="_blanc">
                      <img
                        src={Prisma}
                        alt="prisma logo"
                        title="prisma"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://webpack.js.org/" target="_blanc">
                      <img
                        src={Webpack}
                        alt="webpack logo"
                        title="webpack"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://vitejs.dev/" target="_blanc">
                      <img
                        src={Vite}
                        alt="vite logo"
                        title="vite"
                        className={iconStyle}
                      />
                    </a>
                    <a href="https://stripe.com/" target="_blanc">
                      <img
                        src={Stripe}
                        alt="stripe logo"
                        title="stripe"
                        className={iconStyle}
                      />
                    </a>
                  </div>
                </mo.section>
              )}
            </mo.div>
            <div className="w-fit mt-16 overflow-hidden h-fit">
              <mo.div
                variants={animeItem}
                className="flex flex-row gap-16 items-center"
              >
                <div className="flex flex-row flex-nowrap gap-2 cursor-pointer my_underline">
                  <img
                    src={DocumentArrowDown}
                    alt="arrow down"
                    className="w-5"
                  />
                  <span>resume</span>
                </div>
                <button onClick={handleClick}>next</button>
              </mo.div>
            </div>
          </div>
        </mo.div>
      )}
    </div>
  );
}

export default AboutPage;
