import ApiClient from "../libs/api-client";

const baseUrl = process.env.VUE_APP_USERS_API

console.log(baseUrl);

export default {
    usersList() {
        return ApiClient.get(`${baseUrl}/users`)
    }
}