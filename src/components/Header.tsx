import { Link } from 'react-router-dom';
import { useState } from 'react';

import classes from './Header.module.css';
import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';

function Header() {
  const [mode, setMode] = useState('light');
  const [lang, setLang] = useState('en');
  const handleChangeMode = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };
  const handleChangeLang = () => {
    lang === 'en' ? setLang('ru') : setLang('en');
  };

  return (
    <header className="bg-slate-300 fixed z-10 left-0 right-0 flex flex-row flex-nowrap justify-between items-center px-32 py-4 mt-14">
      <Link to="/" className='font-semibold uppercase'>Home</Link>
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
          <input id="burgerHandler" type="checkbox" className="hidden" />
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
