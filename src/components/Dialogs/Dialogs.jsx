import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




// json(maybe) DATA from DB
const Dialogs = (props) => {

    let dialogsElements = props.dataDialogs.map(
        d => (<DialogItem name={d.name} id={d.id}/>)
    );

    let messagesElements = props.dataMessages.map(
        m => (<Message message={m.message}/>)
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;