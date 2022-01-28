<template>
  <DialogInfo v-model:show="dialogVisible">
    <div>
      <h3>{{this.currentUser.name}}</h3>
      <div class="user__info">
        <br>
        <p><b>nick:</b> {{this.currentUser.username}}</p>
        <p><b>email:</b> {{this.currentUser.email}}</p>
        <p><b>phone:</b> {{this.currentUser.phone}}</p>
        <p><b>Site:</b> {{this.currentUser.website}}</p>
        <p><b>Address:</b> 
          <ul class="user__info-list">
            <li>{{this.currentUser.address.street}}</li>
            <li>{{this.currentUser.address.suite}}</li>
            <li>{{this.currentUser.address.city}}</li>
            <li>{{this.currentUser.address.zipcode}}</li>
            <li><b>Geo:</b></li>
            <li class="user__info-list" v-for="string in this.currentUser.address.geo" :key='string.id'>{{string}}</li>
          </ul>
        </p>
        <p><b>Company:</b>
          <ul class="user__info-list">
            <li v-for="string in this.currentUser.company" :key='string.id'>
              {{string}}
            </li>
          </ul>
        </p>
      </div>
    </div>
  </DialogInfo>
  <el-table :data="getUsers()" style="width: 100%" @keyup.esc="dialogVisible=false">
    <el-table-column prop="id" label="ID" sortable width='80px'/>
    <el-table-column prop="name" label="Name" sortable />
    <el-table-column prop="username" label="Nikname" sortable />
    <el-table-column prop="email" label="Email" sortable />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" @keyup="findEmailDebounce($event)" placeholder="Search email" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleInfo(scope.$index, scope.row)"
          >Info</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import debounce from '../utils/debounce'
import DialogInfo from '../components/DialogInfo.vue'

  export default {
    components: {
      DialogInfo
    },
    data() {
      return {
        users: [],
        search: '',
        dialogVisible: false,
        currentUser: {}
      }
    },
    async mounted() {
      await this.$store.dispatch('getUsersList');
      this.users = this.$store.getters.getUsers;
    },
    computed: {

    },
    methods: {
      findEmail(){
        this.users = this.$store.getters.getUsers
          .filter(user => user.email.toLowerCase()
          .includes(this.search.toLowerCase()));
          console.log(this.users);
      },
        findEmailDebounce: debounce( function (e){
            console.log(e);
        if (!e.target.value) this.search = '';
        return this.findEmail()
        }, 500),
      getUsers() {
        return this.users;
      },
      handleInfo(index, row) {
        this.dialogVisible = true;
        this.currentUser = row;
        console.log(row);
        return row;
      },
      handleDelete(index, row) {
        this.users = this.users.filter(user => user.id !== row.id);
        this.$store.commit('SET_USERS', this.users);
        console.log(this.$store.getters.getUsers);
        console.log(index, row)
      }
    }
  }
</script>

<style>
  li {
    list-style-type: none;
  }
  .user__info-list {
    margin-left: 15px;
  }
</style>