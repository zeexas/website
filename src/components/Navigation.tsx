import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion as mo } from 'framer-motion';

import classes from './Navigation.module.css';
import { headerActions, storeState } from '../store';
import { animeContainerStagger, animeItem } from '../data/animation';

function Navigation() {
  const dispatch = useDispatch();
  const langStore = useSelector((state: storeState) => state.language);

  const handleClickLink = () => {
    dispatch(headerActions.closeMenu());
  };

  return (
    <section className='w-full h-screen'>
      <nav
        key="navigation"
        className={`w-[80%] h-fit sm:w-[50%] absolute top-0 right-0 bottom-0 left-0 m-auto p-6 z-30`}
      >
        <mo.ul
          variants={animeContainerStagger}
          initial={'hidden'}
          animate={'show'}
          className="flex flex-col gap-1 text-4xl sm:text-5xl sm:gap-2 lg:text-7xl lg:gap-4 uppercase font-semibold"
        >
          <div className="overflow-hidden">
            <Link to="/" onClick={handleClickLink}>
              {langStore === 'en' && <mo.li variants={animeItem} className={classes.nav_li}>
                Home
              </mo.li>}
              {langStore === 'ru' && <mo.li variants={animeItem} className={classes.nav_li}>
                Главная
              </mo.li>}
            </Link>
          </div>
          <div className="overflow-hidden">
            <Link to="work" onClick={handleClickLink}>
              {langStore === 'en' && <mo.li variants={animeItem} className={classes.nav_li}>
                Work
              </mo.li>}
              {langStore === 'ru' && <mo.li variants={animeItem} className={classes.nav_li}>
                Проекты
              </mo.li>}
            </Link>
          </div>
          <div className="overflow-hidden">
            <Link to="about" onClick={handleClickLink}>
              {langStore === 'en' && <mo.li variants={animeItem} className={classes.nav_li}>
                About
              </mo.li>}
              {langStore === 'ru' && <mo.li variants={animeItem} className={classes.nav_li}>
                О себе
              </mo.li>}
            </Link>
          </div>
          <div className="overflow-hidden">
            <Link to="contact" onClick={handleClickLink}>
              {langStore === 'en' && <mo.li variants={animeItem} className={classes.nav_li}>
                Contact
              </mo.li>}
              {langStore === 'ru' && <mo.li variants={animeItem} className={classes.nav_li}>
                Контакты
              </mo.li>}
            </Link>
          </div>
        </mo.ul>
      </nav>
    </section>
  );
}

export default Navigation;
