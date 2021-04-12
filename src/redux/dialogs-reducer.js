const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;