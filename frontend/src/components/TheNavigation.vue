<!-- <template> -->
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-danger">
        <div class="container-fluid">
            <div class="nav_left">
                <div class="logo">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
            <div class="nav-right collapse navbar-collapse" id="navbarSupportedContent">
                <div v-for="item in navItems" :key="item.name">
                    <router-link :to="{ name: item.name }" class="text-white mr-5 text-uppercase"
                        style="text-decoration: none;">{{ item.title }} </router-link>
                </div>
                <i class="material-icons text-white" @click="show_dialog">more_vert</i>
                <div class="user">
                    <img src="../assets/user.png" alt="">
                </div>
            </div>
        </div>
    </nav>
    <div class="authan">
        <ul class="ul_authan navbar-nav me-auto mb-lg-0 p-4  rounded  mr-4" v-if="isShow" @click="hide_dialog">
            <li class="nav-item ">
                <router-link to="/register" class="text-dark " style="text-decoration: none;">Register</router-link>
            </li>
            <li class="nav-item ">
                <router-link to="/login" class="text-dark" style="text-decoration: none;">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/logout" class="text-dark" style="text-decoration: none;"
                    @click="logout">Logout</router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import {
    useRoute,
    useRouter
} from 'vue-router';
import axios from 'axios';
// import Cookies from 'js-cookie';
import { BASE_API_URL } from '../constants';
// const cookieSession_id = ref(Cookies.get('session_id'))
const isShow = ref(false)
const navItems = ref([
    { title: 'Home', name: 'home' },
    { title: 'About US', name: 'about' },
    { title: 'Contact Us', name: 'Contact' },
])

// Check if user is logged in
// Get user session
const route = useRoute();
console.log(route.path);
if (route.path !== '/login' && route.path !== '/register') {

    const resp = await fetch(BASE_API_URL + "/user/session", {
        credentials: 'include'
    });

    if (resp.status != 200) {
        // Redirect to login page
        useRouter().push('/login');
    }
}


const show_dialog = () => {
    isShow.value = true

};
const hide_dialog = () => {
    isShow.value = false
}
const logout = () => {
    // console.log(cookieSession_id);
    axios.post(BASE_API_URL + '/user/logout', {}, { withCredentials: true })
        .then(() => {
            console.log("Logouted success");
        })
        .catch(err => {
            console.log(err);
        })

}
</script>
<style scoped>
.nav_left {
    flex: 3;
}
.user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.nav-right {
    display: flex;
    justify-content: flex-end;
}

li {
    font-size: larger;
    padding: 5px;
    /* font-style: ; */

}

li:hover {
    background-color: rgb(233, 233, 243);

}

.logo img {
    width: 100px;
    height: 80px;
}

.authan {
    display: flex;
    justify-content: flex-end;
    width: 100%;



}

.ul_authan {
    background-color: rgb(241, 170, 170);
    position: fixed;
    top: 1;
    z-index: 2000;

}

i {
    cursor: pointer;
}

.router-link-active {
    border-bottom: 4px solid white;
    font-size: 20px;

}

nav {
    position: sticky;
    top: 0;
    z-index: 2000;
}
</style> -->

<template>
    <nav>
        <div class="nav_top">
            <div class="log_search d-flex">
                <div class="logo">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="inputSearch ml-3">
                    <div class="search">
                        <input type="text" placeholder="Search story...">
                    </div>

                </div>
            </div>
            <div class="nav_center">
                <ul>
                    <li><router-link to="/" class="text-white " style="text-decoration: none;">HOME</router-link></li>
                    <li>GENRES</li>
                    <li>POPULAR</li>
                </ul>

            </div>
            <div class="bnt">
                <div class="language">
                    <!-- <img src="./assets/language.png" alt=""> -->
                    <select>
                        <option value="option1">English</option>
                        <option value="option2">Khmer</option>
                    </select>

                </div>
                <button class="publish">Publish</button>
                <button class="sinUp">
                    <router-link to="/register" class="text-dark" style="text-decoration: none;">Sign Up</router-link>
                </button>
                <!-- <div class="light_dack">
                        <img class="icon_light" src="./assets/light.png" alt="">
                    </div> -->
            </div>

        </div>
        <!-- <div class="nav_bottom">
            <ul>

                <li><router-link to="/" class="text-dark " style="text-decoration: none;">HOME</router-link></li>
                <li>GENRES</li>
                <li>POPULAR</li>
            </ul>
            <hr>
        </div> -->
    </nav>
</template>
<script setup>
// import axios from 'axios';
// import {ref, onMounted } from 'vue';
// const dataSession = ref([])
// const getSession = ()=>{
//     axios.get("http://localhost:2000/user/session",{withCredentials:true}).then(res =>{
//         dataSession.value = res
//         console.log(dataSession);
//     }).catch(err =>{
//         console.error(err);
//     })
// }
// onMounted(()=>{
//     getSession();
// })
</script>
<style>
nav {
    /* background-color: rgba(0, 0, 0, 0.717); */
    margin: 0;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 2000;
    font-size: 15px;
}


.nav_center{
    display: flex;
    flex: 2;

    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
}
.nav_top {
    background-color: rgba(64, 51, 51, 0.956);
    display: flex;
    width: 100%;
    padding: 10px;

}



ul {
    display: flex;
    color: white;


}

li {
    list-style: none;
    margin: 7px;
}

.logo {
    flex: 1;

    display: flex;
    margin-left: 4%;
    justify-content: flex-start;
    align-items: center;
}

.logo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 2px;
}

.inputSearch {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;


}

.bnt {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

}

.publish,
.sinUp {
    border-radius: 5px;
    margin: 7px;
    background-color: white;
    padding: 7px;
    border: none;
    width: 80px;
    margin: 7px;



}

input {
    width: 400px;
    padding: 10px;
    border-radius: 5px;

}

.light_dack {
    background-color: aliceblue;
    border-radius: 5px;
    width: 60px;
    padding: 7px;
    margin-left: 5px;
    display: flex;
}

.icon_light {
    width: 30px;
    background-color: #b5b7b9;
    border-radius: 5px;

}

.card:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

button:hover {
    background-color: rgb(11, 177, 222);
    ;
    text-decoration: none;
}

.language img {
    width: 20px;
    width: 20px;
}

.language {
    display: flex;
    background-color: white;
    padding: 8px;
    border-radius: 5px;
}

select {
    border: none;
}

.router-link-active {
    border-bottom: 4px solid white;
    font-size: 20px;

}

@media (max-width: 600px) {
    .logo img {
        width: 40px;
        height: 40px;
    }

    .publish,
    .sinUp,
    .language {
        width: 20pxl;
        font-size: 15px;
        margin: 3%;
    }
    .inputSearch input {
        padding: 5px;
        width: 250px;
        margin-right: 50px;

    }
    .nav_top {
        flex-direction: column;
    }
}

@media (min-width: 601px) and (max-width: 1024px) {
    .logo img {
        width: 40px;
        height: 40px;
    }

    .publish,
    .sinUp,
    .language {
        width: 20pxl;
        font-size: 15px;
        margin: 3%;
    }

    .inputSearch input {
        padding: 5px;
        width: 250px;
        margin-right: 50px;

    }

    .nav_top {
        flex-direction: column;
    }

}</style>