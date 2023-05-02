import { motion as mo } from 'framer-motion';
import { useSelector } from 'react-redux';
import { animeContainer, animeItem } from '../animation';

function ContactPage() {
  const showMenu = useSelector((state: any) => state.showMenu);
  const langStore = useSelector((state: any) => state.language);
  const h3Style = 'uppercase inline-block font-bold';

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {!showMenu && (
        <mo.address
          key="contact"
          variants={animeContainer}
          initial={'hidden'}
          animate={'show'}
          // exit={'hidden'}
          className="w-[65%] h-[40%] flex flex-col text-teal-700 text-[1.3rem]"
        >
          <div className="overflow-hidden">
            {langStore === 'en' && <mo.h2
              variants={animeItem}
              className="text-5xl uppercase font-bold pb-4 border-solid border-0 border-b-2 border-teal-700"
            >
              Contact
            </mo.h2>}
            {langStore === 'ru' && <mo.h2
              variants={animeItem}
              className="text-5xl uppercase font-bold pb-4 border-solid border-0 border-b-2 border-teal-700"
            >
              Контакты
            </mo.h2>}
          </div>
          <section className="flex flex-row flex-wrap mt-6">
            <div className="w-1/2 flex flex-row flex-nowrap">
              <div className="overflow-hidden h-fit">
                <mo.h3 variants={animeItem} className={h3Style}>
                  Mail
                </mo.h3>
              </div>
              <div className="overflow-hidden h-fit">
                <mo.div variants={animeItem} className="ml-12 my_underline">
                  <a
                    href="mailto:lee_hobb@rambler.ru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    lee_hobb@rambler.ru
                  </a>
                </mo.div>
              </div>
            </div>
            <div className="w-1/2 flex">
              <div className="overflow-hidden h-fit">
                <mo.h3 variants={animeItem} className={h3Style}>
                  Social Medias
                </mo.h3>
              </div>
              <ul className="flex flex-col ml-12 gap-1">
                <li className="my_underline overflow-hidden">
                  <mo.a
                    variants={animeItem}
                    href="https://github.com/zeexas"
                    target="_blank"
                    rel="noreferrer"
                    className='inline-block'
                  >
                    github
                  </mo.a>
                </li>
                <li className="my_underline overflow-hidden">
                  <mo.a
                    variants={animeItem}
                    href="https://www.linkedin.com/in/zeexas/"
                    target="_blank"
                    rel="noreferrer"
                    className='inline-block'
                  >
                    linkedin
                  </mo.a>
                </li>
              </ul>
            </div>
          </section>
        </mo.address>
      )}
    </div>
  );
}

export default ContactPage;
