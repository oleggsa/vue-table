<template>

  <navbar></navbar>
  <div class="table-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import UserList from './pages/UserList.vue'
import Navbar from './components/Navbar.vue'
import DialogInfo from './components/DialogInfo.vue'

export default {
  components: {
    UserList,
    Navbar,
    DialogInfo
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.table-wrapper {
  margin: 0 200px;
}
</style>
