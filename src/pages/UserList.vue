<template>
  <DialogInfo v-model:show="dialogVisible" :currentUser='currentUser'></DialogInfo>
  <el-table :data="users" style="width: 100%" @keyup.esc="dialogVisible=false">
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
  <div ref='observer' class="observer"></div>
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
        await this.getUsersList([this.$store.state.perPage, this.$store.state.skip]);
        this.users = this.getUsers;
        this.$store.state.skip += 20;
      } catch (err) {
        alert (err)
      }
      const options = {
        rootMargin: '0px',
        threshold: 1.0
      }
      const callback = (entries) => {
          if (entries[0].isIntersecting && this.$store.state.skip <= 1000){
            this.moreUsersList([this.$store.state.perPage, this.$store.state.skip])
            console.log('asdasd');
          }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer);
    },
    computed: {
      ...mapGetters([
        'getUsers',
        'getMoreUsers'
      ]),
      console(item) {
        console.log(item);
      }
    },
    methods: {
      ...mapActions([
        'getUsersList',
        'addUsersList'
      ]),
      ...mapMutations([
        'SET_USERS',
        'ADD_USERS'
      ]),
      async moreUsersList(){
        try {
          await this.addUsersList([this.$store.state.perPage, this.$store.state.skip]);
          this.$store.state.skip += 20;
          this.users = [...this.users, ...this.getMoreUsers];
      } catch (err) {
        alert (err)
        }
      },
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
  .observer {
    height: 60px;
    margin-bottom: 50px;
  }
</style>