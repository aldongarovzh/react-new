import React from "react";
import s from "./Friends.module.css";


// let state = ['Andrew', 'Sasha', 'Masha'];
//
// let newState = state.map(
//     el => (
//         <div>
//             <div className={s.imgFriends}>
//                 {el}
//             </div>
//             <div>
//                 <img
//                     src=/>
//             </div>
//         </div>
//     )
// )
//
// console.log('----------------------newState');
// console.log(newState);
// console.log('-------------Friends.jsx');


// const Friends = (props) => {
//     console.log(props.state.friend);
//
//     return (
//         <div>
//             {props.state.friend.map((friend) => (
//                 <div>{friend.name}</div>
//             ))}
//         </div>
//     )
// }


const Friends = (props) => {
    console.log(props.state.friend);
    // let newData = props.state.friend.map(friend => (
    //     return (
    //         <div></div>
    //     )
    // ))



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
        // <div>
        //     {props.state.friend.map((friend) => (
        //         <div>{friend.name}</div>
        //     ))}
        // </div>
        <div className={s.returnFriends}>
            {friendsData}
        </div>
    )
}


export default Friends;