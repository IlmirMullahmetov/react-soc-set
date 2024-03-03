import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
if(!props.profile){
  return <Preloader />
}

  return (
    <div className={s.profileInfo}>
      <div className={s.slider}>
        <img alt="slider" src="https://www.funnyart.club/uploads/posts/2023-05/thumbs/1682920909_funnyart-club-p-krasnii-les-pinterest-56.jpg" />
      </div>
      <div className={s.profileInfo__avatar}>
        <div className={s.profileInfo__avatarImage}>
        {/* <img alt="avatar" src='https://i.ibb.co/Zc8pjZ2/0ee8967112ba727bf2d473e682b50903.png' /> */}
        <img src={props.profile.photos.large} />
        </div>
        <div >
        {/* <h2>Ilmir Mullahmetov</h2> */}
        <h2>{props.profile.fullName}</h2>
           <p>{props.profile.lookingForAJobDescription}</p>
        </div>

      </div>
    </div>
  )
}
export default ProfileInfo;