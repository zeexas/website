import { motion as mo } from 'framer-motion';
import { useSelector } from 'react-redux';
import { animeContainer, animeItem } from '../data/animation';

function ContactPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const langStore = useSelector((state: any) => state.language);

  const animeBoxStyle = 'overflow-hidden h-fit'
  const h3Style = 'uppercase inline-block font-bold';
  const title_style =
    'text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-bold pb-4 border-solid border-0 border-b-2';

  return (
    <>
      {!showMenu && (
        <div className={`w-full min-h-screen flex justify-center items-center`}>
          <mo.address
            key="contact"
            variants={animeContainer}
            initial={'hidden'}
            animate={'show'}
            className="w-[80%] md:w-[75%] lg:w-[65%] h-[40%] flex flex-col text-[1rem] md:text-[1.1rem] lg:text-[1.3rem]"
          >
            <div className={animeBoxStyle}>
              {langStore === 'en' && (
                <mo.h2 variants={animeItem} className={title_style}>
                  Contact
                </mo.h2>
              )}
              {langStore === 'ru' && (
                <mo.h2 variants={animeItem} className={title_style}>
                  Контакты
                </mo.h2>
              )}
            </div>
            
            <section className="flex flex-col sm:flex-row mt-6 gap-2">
              <div className="w-auto sm:w-1/2 flex flex-row flex-nowrap">
                <div className={animeBoxStyle}>
                  <mo.h3 variants={animeItem} className={h3Style}>
                    Mail
                  </mo.h3>
                </div>
                <div className={animeBoxStyle}>
                  <mo.div variants={animeItem} className="ml-12 my_underline">
                    <a
                      href="mailto:lee_hobb@rambler.ru"
                      target="_blank"
                    >
                      lee_hobb@rambler.ru
                    </a>
                  </mo.div>
                </div>
              </div>
              <div className="w-auto sm:w-1/2 flex">
                <div className={animeBoxStyle}>
                  <mo.h3 variants={animeItem} className={h3Style}>
                    Social Medias
                  </mo.h3>
                </div>
                <ul className="flex flex-col ml-12 gap md:gap-1">
                  <li className={animeBoxStyle}>
                    <mo.a
                      variants={animeItem}
                      href="https://github.com/zeexas"
                      target="_blank"
                      className="inline-block my_underline"
                    >
                      github
                    </mo.a>
                  </li>
                  <li className={animeBoxStyle}>
                    <mo.a
                      variants={animeItem}
                      href="https://www.linkedin.com/in/zeexas/"
                      target="_blank"
                      className="inline-block my_underline"
                    >
                      linkedin
                    </mo.a>
                  </li>
                </ul>
              </div>
            </section>
          </mo.address>
        </div>
      )}
    </>
  );
}

export default ContactPage;
