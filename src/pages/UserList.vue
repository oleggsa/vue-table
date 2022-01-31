<template>
  <DialogInfo v-model:show="dialogVisible" :currentUser='currentUser'></DialogInfo>
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
</style>