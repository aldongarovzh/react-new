import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message} </div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Amir" id="1"/>
                <DialogItem name="Qanat" id="2"/>
                <DialogItem name="Rustem" id="3"/>
                <DialogItem name="Roma" id="4"/>
                <DialogItem name="Fazyl" id="5"/>
            </div>


            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How is your IT"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;