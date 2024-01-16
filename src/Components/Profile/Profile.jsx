
import MyPostsContainer from './MyPosts/MyPosts-container';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer store = {props.store}
      />
    </div>
  );
}
export default Profile;