import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div className={classes.content}>

        <div>
            <img className={classes.headerImg} src='https://pets2.me/media/res/2/6/7/2/2672.otsiro.300.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            AVA + description

        </div>
    </div>
}

export default ProfileInfo;