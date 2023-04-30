import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';
import { burgerActions } from '../store';

function Header() {
  const dispatch = useDispatch();
  const showMenu = useSelector((state: any) => state.showMenu);

  const [mode, setMode] = useState('light');
  const [lang, setLang] = useState('en');

  const handleChangeMode = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };
  const handleChangeLang = () => {
    lang === 'en' ? setLang('ru') : setLang('en');
  };

  const handleCheckbox = () => {
    dispatch(showMenu ? burgerActions.closeMenu() : burgerActions.openMenu());
  };

  const handleClickLink = () => {
    dispatch(burgerActions.closeMenu());
  }

  return (
    <header className="bg-slate-000 fixed z-10 left-0 right-0 flex flex-row flex-nowrap justify-between items-center px-24 py-4 mt-20">
      <Link to="/" onClick={handleClickLink} className="font-semibold uppercase">
        Home
      </Link>
      <div className="flex flex-row flex-nowrap gap-8 items-center">
        <div
          onClick={handleChangeLang}
          className="uppercase cursor-pointer font-semibold"
        >
          {lang}
        </div>
        <img
          onClick={handleChangeMode}
          src={mode === 'dark' ? Sun : Moon}
          alt="switch dark/light mode"
          className="cursor-pointer"
        />
        <div className="w-[2.2rem]">
          <input
            id="burgerHandler"
            type="checkbox"
            onChange={handleCheckbox}
            className="hidden"
            checked={showMenu}
          />
          <label htmlFor="burgerHandler" className={classes.burger}>
            <div className="flex flex-row flex-nowrap gap">
              <div className="w-[50%]"></div>
              <div className="w-[50%]"></div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
