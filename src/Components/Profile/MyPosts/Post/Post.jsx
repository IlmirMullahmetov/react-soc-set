import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <div class={s.itemBlock}>
        <img alt="post" src='https://i.ibb.co/Zc8pjZ2/0ee8967112ba727bf2d473e682b50903.png' />
        <p>{props.message}</p>
      </div>
      <div class={s.itemLikeCount}>
        <span>
          Like: {props.likeCount}
        </span>
      </div>
    </div>
  );
}
export default Post;