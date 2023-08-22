<template>
    <div id="app">
        <div class="contaner bg-light mb-5">
            <div class="img-register">
                <img src="../../assets/register.png" class="img-fluid" alt="Your Image">
            </div>
            <div class="form ">
                <div class="img-title">
                    <img class="mt-2" src="../../assets/user.png" alt="" style="max-width: 120px; max-height: 120px;">
                    <h2 class="mt-3">Create Account</h2>
                </div>
                <form @submit.prevent="register" class="">
                    <div class="first-name">
                        <label for="last-name"><b>First Name</b></label><br>
                        <input class="form-control" type="text" placeholder="First Name" aria-label="default input example"
                            v-model="first_name">
                        <span v-if="namePath == 'first_name'">{{ validation }}</span>
                        <span>{{ vali_first_name }}</span>
                    </div>
                    <div class="last-name">
                        <label for="last-name"><b>Last Name</b></label><br>
                        <input class="form-control" type="text" placeholder="Last Name" aria-label="default input example"
                            v-model="last_name">
                        <span v-if="namePath == 'last_name'">{{ validation }}</span>
                        <span>{{ vali_last_name }}</span>

                    </div>
                    <div class="email">
                        <label for="email"><b>Email</b></label><br>
                        <input class="form-control" type="email" placeholder="Email" aria-label="default input example"
                            v-model="email">
                        <!-- <span v-if="namePath == 'email'">{{ validation }}</span> -->
                        <span v-if=isemail>{{ alreadyEamil }}</span>
                        <span>{{ vali_email }}</span>


                    </div>
                    <div class="password">
                        <label for="password"><b>Password</b></label><br>
                        <input class="form-control" type="password" placeholder="Password"
                            aria-label="default input example" v-model="password">
                        <span v-if="namePath == 'password'">{{ validation }}</span>
                        <span>{{ vali_pass }}</span>


                    </div>

                    <div class="bnt-register">
                        <button type="submit" class="bg-success">Register</button>
                    </div>
                    <div class="">
                        <p>You have already account
                            <router-link to="/login">Login</router-link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        <div class="dailog_info" v-if="isSendMail">
            <div class="icon_done  icon_success mb-4">
                <img src="../../assets/icon_done1.png" alt="">
            </div>
            <h6>Please check your gmail to verification email !</h6>
            <button class="bg-danger p-1" @click="hied_dailoge">ok</button>

        </div>


    </div>
</template>

<script setup>
// import ListUserVue from '../ListUser.vue';
// import { onMounted } from 'vue';
// import { useRouter } from 'vue-router';

import { ref } from 'vue';
const axios = require('axios');

const first_name = ref('');
const last_name = ref('');
const email = ref('');
const password = ref('');
const isSendMail = ref(false);
const validation = ref("")
const namePath = ref("");
const isemail = ref(false);
const alreadyEamil = ref("")
const vali_first_name = ref("")
const vali_last_name = ref("")
const vali_email = ref("")
const vali_pass = ref("")


const register = () => {
    const user = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
    }
    if (first_name.value == "") {
        vali_first_name.value = "First name must be input!";
    }
    if (last_name.value == "") {
        vali_last_name.value = "Last name must be input!"
    }
    if (email.value == "") {
        vali_email.value = "Email must be input!"
    }
    if (password.value == "") {
        vali_pass.value = "password must be input!";
    }
    else {
        axios.post('http://localhost:2000/user/register', user,{withCredentials:true})
            .then(res => {
                if (res.status == 201) {
                    namePath.value = res.data[0].path[0]
                    validation.value = res.data[0].message
                }
                if (res.status == 200) {
                    isSendMail.value = true;
                }
                console.log(res.status);
                // first_name.value = "",
                // last_name.value = "",
                // email.value = "",
                // password.value = ""
            })
            .catch(err => {
                // Handle the error
                const codeAlreadyEmail = err.response.data.code;
                if (codeAlreadyEmail == 400) {
                    isemail.value = true;
                    alreadyEamil.value = err.response.data.error
                }
            })
    }
}

const hied_dailoge = () => {
    isSendMail.value = false;
}


// onMounted(() => {
//     allUser();
// })

</script>
<style scoped>
span {
    font-size: 12px;
    color: red;
}

.icon_done img {
    width: 70px;
    height: 70px;
}

.dailog_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(40, 42, 42);
    border-radius: 5px;
    padding: 15px;
    margin-top: -40%;
    color: white;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #2c3e50;
    height: 100vh;

}

.contaner {
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

}

.form {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    margin-right: 10px;
    border-radius: 5px;
    margin-left: 10px;
    box-shadow:
        inset 0 -3em 3em rgba(0, 0, 0, 0.1),
        0 0 0 2px white(255, 255, 255),
        0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

}


.img-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

input {
    padding: 10px;
    width: 400px;
    border-radius: 5px;




}

.first-name,
.last-name,
.email,
.password,
.phone-humber,
.psw {
    margin: 10px;
}

button {
    padding: 10px;
    width: 100px;
    background-color: green;
    border-radius: 5px;
    color: white;
    margin: 10px;
    border: none;
}

button:hover {
    background-color: rgb(13, 55, 223);
}

.img-register {
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-register img {
    width: 450px;
    height: 450px;
}

.bnt-register {
    width: 420px;
    display: flex;
    justify-content: flex-end;
}

@media (min-width: 601px) and (max-width: 1024px) {
    .contaner {
        flex-direction: column;
    }

    .img-register {
        width: 400px;
        height: 500px;
    }

    .img-title h2 {
        font-size: 25px;
    }

    /* .img-register{
        display: none;
    } */

    .form {
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 14px;
    }

    form {
        margin-top: 0;
    }

    input {
        width: 250px;

    }

    .first-name,
    .last-name,
    .email,
    .password,
    .phone-humber,
    .psw {
        margin: 5px;
    }

    .bnt-register {
        justify-content: center;
    }

}

@media (max-width: 600px) {
    .img-title h2 {
        font-size: 25px;
    }

    .img-register {
        display: none;
    }

    .form {
        width: 80%;
        height: 100%;
        padding: 0;
        font-size: 14px;
    }

    form {
        margin-top: 0;
    }

    input {
        width: 250px;

    }

    .first-name,
    .last-name,
    .email,
    .password,
    .phone-humber,
    .psw {
        margin: 5px;
    }

    .bnt-register {
        justify-content: center;


    }
}</style>