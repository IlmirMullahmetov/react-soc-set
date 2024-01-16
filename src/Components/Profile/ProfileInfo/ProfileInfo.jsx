import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.slider}>
        <img alt="slider" src="https://www.funnyart.club/uploads/posts/2023-05/thumbs/1682920909_funnyart-club-p-krasnii-les-pinterest-56.jpg" />
      </div>
      <div className={s.profileInfo__avatar}>
        <div className={s.profileInfo__avatarImage}>
        <img alt="avatar" src='https://i.ibb.co/Zc8pjZ2/0ee8967112ba727bf2d473e682b50903.png' />
        </div>
        <div >
        <h2>Ilmir Mullahmetov</h2>
          <strong>Город</strong><br /> Ижевск
        </div>

      </div>
    </div>
  )
}
export default ProfileInfo;