const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    usersData: [
        {
            id: 1,
            photoUrl: '',
            followed: false,
            fullName: 'Grost',
            status: 'Creator this net',
            location: {city: 'Tomsk', country: 'Russia'}
        },
        {
            id: 2,
            photoUrl: '',
            followed: false,
            fullName: 'Stusha',
            status: 'Boss Wife',
            location: {city: 'Tomsk', country: 'Russia'}},
        {
            id: 3,
            photoUrl: '',
            followed: false,
            fullName: 'Elena',
            status: 'Mother of god',
            location: {city: 'Tomsk', country: 'Russia'}
        },
        {
            id: 4,
            photoUrl: '',
            followed: false,
            fullName: 'Valeriy',
            status: 'All father',
            location: {city: 'Tomsk', country: 'Russia'}
        },

    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state, usersData: [...state.usersData, ...action.usersData]
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