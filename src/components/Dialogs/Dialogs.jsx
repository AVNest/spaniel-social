import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map( message => <Message message={message.message}/>);
    let newMessagesBody = state.newMessageBody;


    let  onSendMessageClick = () => {
        props.sendMessage();
    }

    let  onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessagesBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"
                    ></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>





            </div>

        </div>
    )
}

export default Dialogs