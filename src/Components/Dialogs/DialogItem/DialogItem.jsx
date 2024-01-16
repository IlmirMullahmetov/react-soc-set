import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const activeLink = ({ isActive }) => isActive ? s.active + " " + s.dialog : s.dialog;


const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div>

      <NavLink to={path} className={activeLink + " " + s.user} >
        <div>
          <img src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg" alt="" />
        </div>
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem;