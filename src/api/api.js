import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2dc17f38-cb05-46ba-bc5e-2605b832f1a2"
    }
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
        },
}
export const authAPI = {
    getAuth() {
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data;
            });
        },
}
export const profileAPI = {
    getprofile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
        },
}




