import ApiClient from "../libs/api-client";

const baseUrl = process.env.VUE_APP_USERS_API

export default {
    usersList(perPage, skip) {
        return ApiClient.get(`${baseUrl}/users?perPage=${perPage}&skip=${skip}`)
    },
    userData(userId) {
        return ApiClient.get(`${baseUrl}/users/${userId}`)
    }
}