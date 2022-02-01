<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dialog-info',
        props: {
            show: {
                type: Boolean,
                default: false
            },
            currentUser: {
                type: Object
            }
        },
        data() {
            return {

            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            },
            console(item) {
                console.log(item);
            }
        }
    }
</script>

<style scoped>
    .dialog {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
        z-index: 100;
    }
    .dialog__content {
        margin: auto;
        background: white;
        border-radius: 12px;
        min-height: 150px;
        min-width: 300px;
        padding: 25px;
    }
    .user__info-list {
        margin-left: 15px;
    }
</style>