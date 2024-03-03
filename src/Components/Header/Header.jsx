import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
        <img src="http://shelbyreport.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/01/Target_Corporation___Logo.jpg" />
        <div className={s.loginBlock}>
          {props.isAuth ? props.login 
          :<NavLink to={'/login'} >Login</NavLink>}
          
        </div>
      </header>
    );
}
export default Header;