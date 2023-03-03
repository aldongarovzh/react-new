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
    let dialogsData = [
        {id: 1, name: 'Amir'},
        {id: 2, name: 'Qanat'},
        {id: 3, name: 'Rustem'},
        {id: 4, name: 'Roma'},
        {id: 5, name: 'Fazyl'},
    ];

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How is your IT'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
            </div>
        </div>
    );
}

export default Dialogs;