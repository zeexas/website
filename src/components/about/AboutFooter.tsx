import { useSelector } from "react-redux";
import { motion as mo } from "framer-motion";

import DocumentArrowDown from '../../assets/DocumentArrowDown.svg';
import { animeItem } from "../../data/animation";


function AboutFooter(click: any) {
  const langStore = useSelector((state: any) => state.language);
  
  // const handleClick = () => {
  //   setAboutTech(!aboutTech);
  // };

  return (
    <div className="w-fit mt-16 overflow-hidden h-fit">
      {langStore === 'en' && (
        <mo.div
          variants={animeItem}
          className="flex flex-row gap-16 items-start"
        >
          <div className="flex flex-row flex-nowrap gap-2 cursor-pointer my_underline">
            <img src={DocumentArrowDown} alt="arrow down" className="w-5" />
            <div>resume</div>
          </div>
          <button onClick={handleClick} className="">
            next
          </button>
        </mo.div>
      )}
      {langStore === 'ru' && (
        <mo.div
          variants={animeItem}
          className="flex flex-row gap-16 items-center"
        >
          <div className="flex flex-row flex-nowrap gap-2 cursor-pointer my_underline">
            <img src={DocumentArrowDown} alt="arrow down" className="w-5" />
            <span>резюме</span>
          </div>
          <button onClick={handleClick}>дальше</button>
        </mo.div>
      )}
    </div>
  );
}

// export default AboutFooter;
