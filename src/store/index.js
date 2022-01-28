import axios from 'axios'
import {createStore} from 'vuex'
import userService from '../services/user.service';

export default createStore({
    state: {
      users: []
    },
    getters: {
        getUsers(state) {
          return state.users;
        }
    },
    mutations: {
      SET_USERS (state, data){
        state.users = data;
      }
    },
    actions: {
        getUsersList({commit}){
          return new Promise((resolve, reject) => 
            userService
            .usersList()
            .then(response => {
              commit('SET_USERS', response.data);

              return resolve(response.data)
            })
            .catch(error => reject(error))
          )
        }
    },
  }
)