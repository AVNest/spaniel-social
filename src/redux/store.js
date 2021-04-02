import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: "Hi, how are you?", likesCount: 15},
                {id: 2, post: "I learning React JS", likesCount: 1},
                {id: 3, post: "It's my first post", likesCount: 99}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Stusha'},
                {id: 2, name: 'Elena'},
                {id: 3, name: 'Valeriy'},
                {id: 4, name: 'Mironchev'},
                {id: 5, name: 'Julya'},
                {id: 6, name: 'Oliver'},
                {id: 7, name: 'Sosed'}
            ],
            messagesData: [
                {id: 1, message: "hello"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Whats up"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


window.state = store;

export default store;