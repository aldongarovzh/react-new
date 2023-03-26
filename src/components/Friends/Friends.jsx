import React from "react";
import s from "./Friends.module.css";



const Friends = (props) => {

    let friendsData = props.state.friend.map(friend => {
        return (
            <div className={s.mainFriends}>
                <div className={s.imgFriends}>
                    <img src={friend.img}/>
                </div>
                <div className={s.nameFriends}> {friend.name} </div>
            </div>
        )
    })

    return (
        <div className={s.returnFriends}>
            {friendsData}
        </div>
    )
}


export default Friends;