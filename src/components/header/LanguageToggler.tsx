import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion as mo } from 'framer-motion';
import { headerActions } from '../../store';
import { animeBasic } from '../../data/animation';

function LanguageToggler() {
  const dispatch = useDispatch();
  const langStore = useSelector((state: any) => state.language);
  const [lang, setLang] = useState(langStore);

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

  return (
    <div onClick={handleChangeLang} className="cursor-pointer">
      {lang === 'en' && (
        <mo.div variants={animeBasic} initial={'hidden'} animate={'show'}>
          en
        </mo.div>
      )}
      {lang === 'ru' && (
        <mo.div variants={animeBasic} initial={'hidden'} animate={'show'}>
          ru
        </mo.div>
      )}
    </div>
  );
}

export default LanguageToggler;
