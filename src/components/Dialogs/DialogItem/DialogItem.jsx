import React from "react";
import s from '../Dialogs.module.css'; // s imported from Dialogs not from DialogItem
import {NavLink} from "react-router-dom";
// import d from './DialogItem.module.css';


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.avatarMain}>
                <div className={s.avatar}>
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"/>
                </div>

                <div>
                    <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink>
                </div>
            </div>
        </div>
    );
}



export default DialogItem;