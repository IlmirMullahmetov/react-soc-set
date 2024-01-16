
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {
  let quantityFriends = Object.keys(props.state).length;
  let friendElements = props.state.map(friend => (
    <FriendItem
      name={friend.name}
      id={friend.id}
      avatar={friend.avatar}
    />
  ))
  return (
    <div className={s.friends}>
      <h3>Friends online <span>{quantityFriends}</span></h3>
    <div className={s.friendsBlock}>
      
      {friendElements}
      </div>
      </div>
  );
}
export default Friends;