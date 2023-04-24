import { Link } from 'react-router-dom'
import classes from './Navigation.module.css'

function Navigation() {
  return (
    <nav className="w-[50%] absolute top-[25%] left-[50%] -translate-x-1/2 my-auto p-6">
      <ul className="flex flex-col gap-4 text-7xl uppercase font-semibold">
        <Link to='/'><li className={classes.nav_li}>Home</li></Link>
        <Link to='work'><li className={classes.nav_li}>Work</li></Link>
        <Link to='about'><li className={classes.nav_li}>About</li></Link>
        <Link to='contact'><li className={classes.nav_li}>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navigation