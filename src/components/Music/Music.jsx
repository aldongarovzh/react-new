import React from "react";
import s from './Music.module.css';


const Music = () => {

    let stateMusic = ['50cent', 'Eminem', 'Scryptonite'];
    let newMusicData = stateMusic.map(el => {
            return <div> {el} </div>
        }
    );
    // console.log('-------------123');
    // console.log({newMusicData});

    return (
        <div>
            {newMusicData}
        </div>
    );
}

export default Music;