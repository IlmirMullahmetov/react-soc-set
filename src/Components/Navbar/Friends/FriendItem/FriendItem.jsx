import s from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    
    <div className={s.friendItem}>
        <div>
            <img src={props.avatar} alt='avatar' />
        </div>
        <div>
            {props.name}
        </div>
      </div>
  );
}
export default FriendItem;