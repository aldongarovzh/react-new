import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Amir
                </div>
                <div className={s.dialog}>
                    Qanat
                </div>
                <div className={s.dialog}>
                    Rustem
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
            </div>


            <div className={s.messages}>
                <div className={s.message}> Hello </div>
                <div className={s.message}> How is your IT </div>
                <div className={s.message}> Yo </div>
            </div>
        </div>
    );
}

export default Dialogs;