import React from "react";
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://pets.mail.ru/pic/pets/2019/08/14/image_81_1.jpg'/>
            {props.message}
            <div><span>like</span> {props.likesCount}</div>

        </div>
    )
}

export default Post;