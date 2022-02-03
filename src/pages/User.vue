<template>
    <div>
        <div v-if="this.user">
            Пользователь {{$route.params.id}}
            <h1>{{this.user.name}}</h1>
            <p><b>nick:</b> {{this.user.username}}</p>
            <p><b>email:</b> {{this.user.email}}</p>
            <p><b>phone:</b> {{this.user.phone}}</p>
            <p><b>Site:</b> {{this.user.website}}</p>
                    <p><b>Address:</b></p>
                    <ul>
                        <li>{{this.user.address.street}}</li>
                        <li>{{this.user.address.suite}}</li>
                        <li>{{this.user.address.city}}</li>
                        <li>{{this.user.address.zipcode}}</li>
                        <li><b>Geo:</b></li>
                        <li class="user__info-list" v-for="string in this.user.address.geo" :key='string.id'>{{string}}</li>
                    </ul>
            <p><b>Company:</b></p>
            <ul class="user__info-list">
                <li v-for="string in this.user.company" :key='string.id'>
                    {{string}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import {useRoute} from 'vue-router'
  import userService from "../services/user.service";

  export default {

    name: "User",
    data() {
      return {
        user: '',
        show: true
      }
    },
    mounted() {
      const route = useRoute();
      this.getUser(route.params.id)
    },
    methods: {
      async getUser(id) {
        return await new Promise((resolve, reject) =>
          userService
            .userData(id)
            .then(response => {
              this.user = response.data;
              console.log(this.user)
              return resolve(response.data)
            })
            .catch(error => {
              this.$router.replace('/404')
              reject(error.message)
            })
        )
      }
    }
  }
</script>

<style scoped>

</style>