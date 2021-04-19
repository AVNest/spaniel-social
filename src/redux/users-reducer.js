const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://tvaryny.com/sites/default/files/styles/medium/public/images/breed/141470/logo-141470.jpg?itok=ZcCt5Lgx',
        //     followed: true,
        //     fullName: 'Grost',
        //     status: 'Creator this net',
        //     location: {city: 'Tomsk', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://tvaryny.com/sites/default/files/styles/medium/public/images/breed/141470/logo-141470.jpg?itok=ZcCt5Lgx',
        //     followed: false,
        //     fullName: 'Stusha',
        //     status: 'Boss Wife',
        //     location: {city: 'Tomsk', country: 'Russia'}},
        // {
        //     id: 3,
        //     photoUrl: 'https://tvaryny.com/sites/default/files/styles/medium/public/images/breed/141470/logo-141470.jpg?itok=ZcCt5Lgx',
        //     followed: false,
        //     fullName: 'Elena',
        //     status: 'Mother of god',
        //     location: {city: 'Tomsk', country: 'Russia'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://tvaryny.com/sites/default/files/styles/medium/public/images/breed/141470/logo-141470.jpg?itok=ZcCt5Lgx',
        //     followed: false,
        //     fullName: 'Valeriy',
        //     status: 'All father',
        //     location: {city: 'Tomsk', country: 'Russia'}
        // },

    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }

        default :
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;