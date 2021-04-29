import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import Like from "../../common/Like/Like";
import Dislike from "../../common/Dislike/Dislike";


const ProfileInfo = (props) => {
        if (!props.profile) {
            return <Preloader/>
        }

    return <div className={classes.content}>
        <div>
            <img className={classes.headerImg} src='https://pets2.me/media/res/2/6/7/2/2672.otsiro.300.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.small}/>
            <div>Полное имя: {props.profile.fullName}</div>
            <div>Обо мне: {props.profile.aboutMe}</div>
            <div>Контакт: {props.profile.contacts.vk}</div>
            <div>Ищу работу: {(!props.profile.lookingForAJob) ? <Dislike/> : <Like/>} </div>
            <div>Место работы: {props.profile.lookingForAJobDescription}</div>
        </div>
    </div>
}

export default ProfileInfo;