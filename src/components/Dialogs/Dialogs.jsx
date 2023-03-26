import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




// json(maybe) DATA from DB
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(
        d => (<DialogItem name={d.name} id={d.id}/>)
    );

    let messagesElements = props.state.messages.map(
        m => (<Message message={m.message}/>)
    );


    let textInput = React.createRef();

    let clickDialog = () => {
        let text = textInput.current.value;
        console.log(props.state.messages);
        props.state.messages.push({ id: 1, message: text });
        console.log(props.state.messages);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.sendMessage}>
                <textarea ref={ textInput }></textarea>
                <button onClick={ clickDialog }> Send message </button>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;