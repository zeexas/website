import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { headerActions } from '../../store';
import { darkStyle_base } from '../../data/styleVars';
import LanguageToggler from './LanguageToggler';
import ModeToggler from './ModeToggler';
import Hamburger from './Hamburger';

function Header() {
  const dispatch = useDispatch();

  const handleClickHome = () => {
    dispatch(headerActions.closeMenu());
  };

  return (
    <header
      className={`font-semibold text-xs sm:text-sm md:text-base uppercase fixed z-10 left-0 right-0 
      flex flex-row flex-nowrap justify-between items-center px-10 md:px-16 lg:px-24 py-4 mt-6 md:mt-12 lg:mt-20 ${darkStyle_base}`}
    >
      <Link to="/" onClick={handleClickHome}>
        Home
      </Link>
      <div className="flex flex-row flex-nowrap gap-4 md:gap-6 lg:gap-8 items-center">
        <LanguageToggler />
        <ModeToggler />
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
