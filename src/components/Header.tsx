import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';
import { headerActions } from '../store';
import { motion as mo } from 'framer-motion';
import { darkStyle_base } from '../data/styleVars';

function Header() {
  const dispatch = useDispatch();
  const showMenu = useSelector((state: any) => state.showMenu);
  const langStore = useSelector((state: any) => state.language);
  const modeStore = useSelector((state: any) => state.mode);

  const [mode, setMode] = useState(modeStore);
  const [lang, setLang] = useState(langStore);

  const handleChangeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      localStorage.setItem('mode', 'light')
      dispatch(headerActions.setMode('light'));
    } else {
      setMode('dark');
      localStorage.setItem('mode', 'dark')
      dispatch(headerActions.setMode('dark'));
    }
  };

  const handleChangeLang = () => {
    if (lang === 'en') {
      setLang('ru');
      localStorage.setItem('lang', 'ru');
      dispatch(headerActions.setLanguage('ru'));
    } else {
      setLang('en');
      localStorage.setItem('lang', 'en');
      dispatch(headerActions.setLanguage('en'));
    }
  };

  const handleBurger = () => {
    dispatch(showMenu ? headerActions.closeMenu() : headerActions.openMenu());
  };

  const handleClickHome = () => {
    dispatch(headerActions.closeMenu());
  };

  return (
    <header
      className={`fixed z-10 left-0 right-0 flex flex-row flex-nowrap justify-between items-center px-24 py-4 mt-20 ${darkStyle_base}`}
    >
      <Link
        to="/"
        onClick={handleClickHome}
        className="font-semibold uppercase"
      >
        Home
      </Link>
      <div className="flex flex-row flex-nowrap gap-8 items-center">
        <div
          onClick={handleChangeLang}
          className="uppercase cursor-pointer font-semibold"
        >
          {lang === 'en' && (
            <mo.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              en
            </mo.div>
          )}
          {lang === 'ru' && (
            <mo.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              ru
            </mo.div>
          )}
        </div>

        <div onClick={handleChangeMode} className="cursor-pointer w-[20px]">
          {mode === 'dark' && (
            <mo.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={Sun}
              alt="sun icon"
            />
          )}
          {mode === 'light' && (
            <mo.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={Moon}
              alt="moon icon"
            />
          )}
        </div>

        <div className="w-[2.2rem]">
          <input
            id="burgerHandler"
            type="checkbox"
            onChange={handleBurger}
            className="hidden"
            checked={showMenu}
          />
          <label
            htmlFor="burgerHandler"
            className={`${classes.burger} dark:before:border-emerald-50 dark:after:border-emerald-50 [&>div>div]:dark:border-emerald-50`}
          >
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
