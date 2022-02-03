import {createStore} from 'vuex'
import userService from '../services/user.service';

export default createStore({
    state: {
      users: [],
      moreUsers: [],
      perPage: 20,
      skip: 0
    },
    getters: {
      getUsers: state => state.users,
      getMoreUsers: state => state.moreUsers
    },
    mutations: {
      SET_USERS(state, data) {
        state.users = data;
      },
      ADD_USERS(state, data) {
        state.moreUsers = data;
      }
    },
    actions: {
      getUsersList({commit}, [perPage = 20, skip = 0]) {
        return new Promise((resolve, reject) =>
          userService
            .usersList(perPage, skip)
            .then(response => {
              console.log(response);
              commit('SET_USERS', response.data.users);
              console.log(this.state.users)
              return resolve(response.data.users)
            })
            .catch(error => reject(error))
        )
      },
      addUsersList({commit}, [perPage = 20, skip = 20]) {
        return new Promise((resolve, reject) =>
          userService
            .usersList(perPage, skip)
            .then(response => {
              commit('ADD_USERS', response.data.users);
              console.log('more users')
              console.log(this.state.moreUsers)
              return resolve(response.data.users)
            })
            .catch(error => reject(error))
        )
      }
    },
  }
)