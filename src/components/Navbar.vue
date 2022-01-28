<template>
    <div class="navbar">
        <el-button @click="$router.push('/')" type="danger">Main</el-button>
        <el-button @click="$router.push('/list')" type="danger">Users list</el-button>
        <el-button @click="$router.push('/about')" type="danger">About</el-button>
    </div>
</template>

<script>
    export default {
        
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
</style>