import css from "./FriendList.module.css"


export default function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;
  
    return (
      <div className={css.box}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.text}>{name}</p>
        <p className={isOnline ? css.onlineStatus : css.offlineStatus}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    );
  }