import ApiClient from "../libs/api-client";

const baseUrl = process.env.VUE_APP_USERS_API

console.log(baseUrl);

export default {
    usersList(perPage, skip) {
        return ApiClient.get(`${baseUrl}/users?perPage=${perPage}&skip=${skip}`)
    }
}