const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW-_POST_TEXT';

let  initialState = {
    postsData: [
        {id: 1, post: "Hi, how are you?", likesCount: 15},
        {id: 2, post: "I learning React JS", likesCount: 1},
        {id: 3, post: "It's my first post", likesCount: 99}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action)  => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            //stateCopy.postsData = [...state.postsData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;