import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion as mo } from 'framer-motion';

import { animeBasic } from '../../data/animation';
import { headerActions } from '../../store';
import Sun from '../../assets/Sun.svg';
import Moon from '../../assets/Moon.svg';

function ModeToggler() {
  const dispatch = useDispatch();
  const modeStore = useSelector((state: any) => state.mode);
  const [mode, setMode] = useState(modeStore);

  const handleChangeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      localStorage.setItem('mode', 'light');
      dispatch(headerActions.setMode('light'));
    } else {
      setMode('dark');
      localStorage.setItem('mode', 'dark');
      dispatch(headerActions.setMode('dark'));
    }
  };

  return (
    <div onClick={handleChangeMode} className="cursor-pointer w-[16px] sm:w-[18px] md:w-[20px]">
      {mode === 'dark' && (
        <mo.img
          variants={animeBasic}
          initial={'hidden'}
          animate={'show'}
          src={Sun}
          alt="sun icon"
        />
      )}
      {mode === 'light' && (
        <mo.img
          variants={animeBasic}
          initial={'hidden'}
          animate={'show'}
          src={Moon}
          alt="moon icon"
        />
      )}
    </div>
  );
}

export default ModeToggler;
