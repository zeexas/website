import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '../../store';
import classes from './Header.module.css';

function Hamburger() {
  const dispatch = useDispatch();

  const showMenu = useSelector((state: any) => state.showMenu);

  const handleBurger = () => {
    dispatch(showMenu ? headerActions.closeMenu() : headerActions.openMenu());
  };

  return (
    <div className="w-[1.6rem] md:w-[2.0rem] lg:w-[2.2rem]">
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
  );
}

export default Hamburger;
