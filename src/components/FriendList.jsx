import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"


export default function FriendsList ({friends}) {
    return (
        <ul className={css.container}>
            {friends.map((friend)=>
            <li className={css.list} key={friend.id}>
              < FriendListItem friend={friend}/>
            </li>
            )}
        </ul>
    )
}