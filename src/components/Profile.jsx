import userData from '../userData.json'
import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
    return (
      <div className={css.container}>
        <img
        className={css.img}
          src={image}
          alt="User avatar"
        />
        <p className={css.title}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
  
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.span}>Followers</span>
            <span className={css.span}>{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.span}>Views</span>
            <span className={css.span}>{stats.views}</span>
          </li>
          <li className={css.item}>
            <span className={css.span}>Likes</span>
            <span className={css.span}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }