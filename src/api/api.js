import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2ab53527-22ec-411a-a067-36cc969bffd6"
    }
});

export const usersAPI = {
    getUsers(activePage = 1, pageSize = 3) {
        return instance.get(`users?page=${activePage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            });
    }
    createFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}
