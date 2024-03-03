import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  const activeLink = ({ isActive }) => isActive ? s.active + " " + s.item : s.item;
  return (
    <div className={s.nav}>
      <nav >
        <div>
          <NavLink to="/profile" className={activeLink}>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/dialogs' className={activeLink}>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/users' className={activeLink}>Users</NavLink>
        </div>
        <div>
          <NavLink to='/news' className={activeLink}>News</NavLink>
        </div>
        <div >
          <NavLink to='/music' className={activeLink}>Music</NavLink>
        </div>
        <div>
          <NavLink to='settings' className={activeLink}>Settings</NavLink>
        </div>
      </nav>
      {/* <Friends store={props.friends} /> */}
    </div>
  );
}
export default Navbar;