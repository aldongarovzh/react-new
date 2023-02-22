import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1380&t=st=1676316110~exp=1676316710~hmac=24cc4d64d0c5e9157c3751223d076cb888ef53c355d748eee718e4e504e50c39"
                alt=""/>
            {props.message}
            <br/>
            {props.like}
            <div>
                <span> Like </span>
            </div>
        </div>
    )
}

export default Post;