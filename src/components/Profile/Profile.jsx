import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
            <div className={s.content}>
                <div>
                    <img src="https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457878.jpg&fm=jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
    )
}

export default Profile;