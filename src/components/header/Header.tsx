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
      className={`font-semibold uppercase fixed z-10 left-0 right-0 flex flex-row flex-nowrap justify-between items-center px-24 py-4 mt-20 ${darkStyle_base}`}
    >
      <Link to="/" onClick={handleClickHome}>
        Home
      </Link>
      <div className="flex flex-row flex-nowrap gap-8 items-center">
        <LanguageToggler />
        <ModeToggler />
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
