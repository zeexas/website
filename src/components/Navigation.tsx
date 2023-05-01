import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { burgerActions } from '../store';
import { motion as mo } from 'framer-motion';
import { animeContainerStagger, animeItem } from '../animation';

function Navigation() {
  const dispatch = useDispatch();
  const showMenu = useSelector((state: any) => state.showMenu);

  const handleClickLink = () => {
    dispatch(showMenu ? burgerActions.closeMenu() : burgerActions.openMenu());
  };

  return (
    <mo.nav
      key="navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="w-[50%] absolute top-[180px] left-[50%] -translate-x-1/2 my-auto p-6 z-30"
    >
      <mo.ul
        variants={animeContainerStagger}
        initial={'hidden'}
        animate={'show'}
        className="flex flex-col gap-4 text-7xl uppercase font-semibold"
      >
        <div className="overflow-hidden">
          <Link to="/" onClick={handleClickLink}>
            <mo.li variants={animeItem} className={classes.nav_li}>
              Home
            </mo.li>
          </Link>
        </div>
        <div className="overflow-hidden">
          <Link to="work" onClick={handleClickLink}>
            <mo.li variants={animeItem} className={classes.nav_li}>
              Work
            </mo.li>
          </Link>
        </div>
        <div className="overflow-hidden">
          <Link to="about" onClick={handleClickLink}>
            <mo.li variants={animeItem} className={classes.nav_li}>
              About
            </mo.li>
          </Link>
        </div>
        <div className="overflow-hidden">
          <Link to="contact" onClick={handleClickLink}>
            <mo.li variants={animeItem} className={classes.nav_li}>
              Contact
            </mo.li>
          </Link>
        </div>
      </mo.ul>
    </mo.nav>
  );
}

export default Navigation;
