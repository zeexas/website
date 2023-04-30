import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { burgerActions } from '../store';

function Navigation() {
  const dispatch = useDispatch();
  const showMenu = useSelector((state: any) => state.showMenu);

  const handleClickLink = () => {
    dispatch(showMenu ? burgerActions.closeMenu() : burgerActions.openMenu());
  };

  return (
    <nav className="w-[50%] absolute top-[25%] left-[50%] -translate-x-1/2 my-auto p-6 z-30">
      <ul className="flex flex-col gap-4 text-7xl uppercase font-semibold">
        <Link to="/" onClick={handleClickLink}>
          <li className={classes.nav_li}>Home</li>
        </Link>
        <Link to="work" onClick={handleClickLink}>
          <li className={classes.nav_li}>Work</li>
        </Link>
        <Link to="about" onClick={handleClickLink}>
          <li className={classes.nav_li}>About</li>
        </Link>
        <Link to="contact" onClick={handleClickLink}>
          <li className={classes.nav_li}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
