import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion as mo } from 'framer-motion';

import { animeBasic, animeContainerStagger, animeItem } from '../../data/animation';
import DocumentArrowDown from '../../assets/DocumentArrowDown.svg';
import Resume from '../../assets/Valery_Li_Resume.pdf'
import Resume_ru from '../../assets/Valery_Li_Resume_ru.pdf'

// import AboutMe from './AboutMe';
import { techsMain, techsOthers } from '../../data/techs';

function About() {
  const langStore = useSelector((state: any) => state.language);
  const modeStore = useSelector((state: any) => state.mode);
  const [aboutTech, setAboutTech] = useState(false);

  const iconBlock = `w-[100%] flex flex-row flex-wrap gap-x-5 md:gap-x-6 lg:gap-x-10 gap-y-6 mt-6 pl-2`;
  const iconStyle = `w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] 
    cursor-pointer grayscale hover:grayscale-0 hover:scale-125 transition duration-200`;
  const titleStyle = 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold pb-4 border-solid border-0 border-b-2'
  const resumeLinkStyle = 'flex flex-row flex-nowrap gap-2 cursor-pointer my_underline'

  const handleClick = () => {
    setAboutTech(!aboutTech);
  };

  return (
    <mo.div
      variants={animeContainerStagger}
      initial={'hidden'}
      animate={'show'}
      className="w-[75%] md:w-[70%] lg:w-[65%] h-[50%] text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] overflow-hidden"
    >
      <div className="w-full h-full flex flex-col">
        <div className="overflow-hidden">
          {langStore === 'en' && (
            <mo.h2
              variants={animeItem}
              className={titleStyle}
            >
              About
            </mo.h2>
          )}
          {langStore === 'ru' && (
            <mo.h2
              variants={animeItem}
              className={titleStyle}
            >
              О себе
            </mo.h2>
          )}
        </div>
        <mo.div
          initial={{ opacity: 0, translateY: '-30%' }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          exit={{ opacity: 0 }}
        >
          {/* <AboutMe lang={langStore} aboutTech={aboutTech} /> */}
          {!aboutTech && langStore === 'en' && (
            <mo.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className="w-[100%] lg:w-[90%] mt-8"
            >
              Hi, my name is Valery Li and I'm a front-end engineer who has
              experience in building back-end infrastructure too. I also have
              wide experience (10+ years) in finance creating budgets and
              financial statements and understand all business processes in
              companies. I am passionate about learning new technologies and
              finding solutions in non-standard tasks. In my childhood I was
              crazy about chess, but now I prefer billiards more. <br />
              My latest achivements: ~ created full-stack app prototype for
              financial company ~ ran a half marathon in Almaty (april, 2023)
            </mo.section>
          )}
          {!aboutTech && langStore === 'ru' && (
            <mo.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className="w-[90%] mt-8"
            >
              Привет, меня зовут Валерий и я - фронтенд разработчик (2+ года
              опыта), также имеющий опыт создания серверной части приложений
              (бэкенд). У меня богатый опыт (10+ лет) работы в финансовой сфере
              (бюджетирование, финансовое планирование и различные виды
              отчетностей) и глубокое понимание бизнес процессов компаний.
              Обожаю изучать новые технологии и находить решения нестандартных
              задач. С детства играю в шахматы, но сейчас больше предпочитаю
              бильярд. <br />
              Мои последние достижения: ~ разработал прототип full-stack
              приложения для финансовой компании ~ пробежал полумарафон в Алматы
              (апрель, 2023)
            </mo.section>
          )}
          {aboutTech && (
            <mo.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 sm:mt-6 lg:mt-8"
            >
              {langStore === 'en' && (
                <mo.div variants={animeBasic} initial={'hidden'} animate={'show'}>
                  Technologies I use for creating web applications
                </mo.div>
              )}
              {langStore === 'ru' && (
                <mo.div variants={animeBasic} initial={'hidden'} animate={'show'}>
                  Технологии, с которыми я уже работал
                </mo.div>
              )}

              <div className={`${iconBlock}`}>
                {techsMain.map((item: any) => (
                  <a key={item.id} href={item.url} target="_blanc">
                    <img
                      src={item.svg}
                      alt={`${item.name} logo`}
                      title={item.name}
                      className={iconStyle}
                    />
                  </a>
                ))}
              </div>
              <div className={`${iconBlock}`}>
                {techsOthers.map((item: any) => (
                  <a key={item.id} href={item.url} target="_blanc">
                    <img
                      src={
                        item.name !== 'prisma'
                          ? item.svg
                          : modeStore === 'dark'
                          ? item.svg.white
                          : item.svg.black
                      }
                      alt={`${item.name} logo`}
                      title={item.name}
                      className={iconStyle}
                    />
                  </a>
                ))}
              </div>
            </mo.section>
          )}
        </mo.div>
        <div className="w-fit mt-16 overflow-hidden h-fit">
          {langStore === 'en' && (
            <mo.div
              variants={animeItem}
              className="flex flex-row gap-16 items-start"
            >
              <a href={Resume} target='_blanc' rel='noreferrer'>
                <div className={resumeLinkStyle}>
                  <img src={DocumentArrowDown} alt="arrow down" className="w-5" />
                  <div>resume</div>
                </div>
              </a>
              <button onClick={handleClick} className="">
                next
              </button>
            </mo.div>
          )}
          {langStore === 'ru' && (
            <mo.div
              variants={animeItem}
              className="flex flex-row gap-16 items-center"
            >
              <a href={Resume_ru} target='_blanc' rel='noreferrer'>
                <div className={resumeLinkStyle}>
                  <img src={DocumentArrowDown} alt="arrow down" className="w-5" />
                  <span>резюме</span>
                </div>
              </a>
              <button onClick={handleClick}>дальше</button>
            </mo.div>
          )}
        </div>
      </div>
    </mo.div>
  );
}

export default About;
