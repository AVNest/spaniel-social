import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "010e1d40-f964-4b1a-b1d2-01fea7ac50a0"
    }
});

export const UsersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }

    /*follow(currentPage = 1, pageSize = 10) {
        return instance.post(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    }*/

    /*unfollow(currentPage = 1, pageSize = 10) {
        return instance.delete(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    }*/
}
