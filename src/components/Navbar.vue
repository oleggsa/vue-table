<template>
    <div class="navbar">
        <el-button type="danger" v-for="link in this.navbarLinks" :key="link.name">
            <router-link :to="link[0]">{{link[1]}}</router-link>
        </el-button>
        <!-- <el-button type="danger" @click="console">
            <router-link to="/list">Users</router-link>
        </el-button>
        <el-button type="danger">
            <router-link to="/about">About</router-link>
        </el-button> -->
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data(){
            return {
                navbarLinks: [
                    ['/', 'Main'], 
                    ['/list', 'Users'], 
                    ['/about', 'About']
                ]
            }
        }
    }
</script>

<style scoped>
    .navbar {
        width: 100%;
        background-color: lightgreen;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: white;
    }
</style>