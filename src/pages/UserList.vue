<template>
  <DialogInfo v-model:show="dialogVisible" :currentUser='currentUser'></DialogInfo>
  <el-table :data="getCurrentUsers()" style="width: 100%" @keyup.esc="dialogVisible=false">
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
import {mapGetters, mapActions, mapMutations} from 'vuex';

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
      try {
        await this.getUsersList();
        console.log(this.users);
        this.users = this.getUsers;
        console.log(this.users);
      } catch (err) {
        alert (err)
      }
    },
    computed: {
      ...mapGetters([
        'getUsers'
      ]),
      console(item) {
        console.log(item);
      }
    },
    methods: {
      ...mapActions([
        'getUsersList'
      ]),
      ...mapMutations([
        'SET_USERS'
      ]),
      findEmail(){
        this.users = this.getUsers
          .filter(user => user.email.toLowerCase()
          .includes(this.search.toLowerCase()));
          console.log(this.users);
      },
        findEmailDebounce: debounce( function (e){
            console.log(e);
        if (!e.target.value) this.search = '';
        return this.findEmail()
        }, 500),
      getCurrentUsers() {
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
        this.SET_USERS(this.users);
        console.log(this.getUsers);
        console.log(index, row)
      }
    }
  }
</script>

<style>
  li {
    list-style-type: none;
  }
</style>