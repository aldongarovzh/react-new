import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457878.jpg&fm=jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;