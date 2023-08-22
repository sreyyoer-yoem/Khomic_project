<template>
    <div id="app">
        <div class="container_big">
            <div class="contaner mt-5">
                <div class="img-login">
                    <img src="../../assets/login.png" alt="login">
                </div>
                <div class="form">
                    <div class="img-title">
                        <img src="../../assets/user.png" alt="">

                    </div>
                    <form @submit.prevent="resetPassword">
                        <div class="email">
                            <input class="form-control" type="text" placeholder="Code" aria-label="default input example"
                                v-model="code">
                            <span>{{ vali_code }}</span>
                        </div>
                        <div class="newPass">
                            <input class="form-control" type="password" placeholder="New password"
                                aria-label="default input example" v-model="newPassword">
                            <span>{{ vali_newPassword }}</span>
                        </div>
                        <div class="comformPass">
                            <input class="form-control" type="password" placeholder="Conform Password"
                                aria-label="default input example" v-model="conformPassword">
                            <span>{{ vali_conformPass }}</span>
                        </div>
                        <button type="submit" class=" send bg-danger">send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const code = ref("");
const newPassword = ref("");
const conformPassword = ref("");
const vali_newPassword = ref("");
const vali_conformPass = ref("");
const vali_code = ref("");

const resetPassword = () => {
    if (newPassword.value !== conformPassword.value) {
        vali_conformPass.value = "invalited password";
        vali_newPassword.value = "invalited Password";
    } else {
        axios.post('http://localhost:2000/user/resetNewPass', { code: code.value, newPassword: newPassword.value })
            .then(() => {
                window.location.href = "/";
            })
            .catch(err => {
                const error = err.response.data;
                console.log(error);
                if (err.response.data.code == 405) {
                    vali_code.value = err.response.data.error;
                }
                
            })

    }

}



</script>
<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}

span {
    color: red;
    font-size: small;
}

.send {
    width: 55%;
    margin-bottom: 10px;
}

.container_big {
    display: flex;
    justify-content: center;
}

.contaner {
    background-color: aliceblue;
    width: 50%;
    display: flex;
    border-radius: 5px;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.form {
    background-color: white;
    padding: 10px;
    width: 40%;
    border-radius: 5px;
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
}

img {
    width: 80px;
    height: 80px;
    margin-top: 10px;
}

.img-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input {
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    margin-top: 5px;
}

button {
    width: 90%;
    border-radius: 5px;
    border: none;
    padding: 8px;
    color: white;
}

.email,
.newPass,
.comformPass {
    margin: 7px;
}




.img-login img {
    width: 300px;
    height: 300px;
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

    .bnt_login {
        background-color: antiquewhite;
        width: 250px;


    }

}

@media (max-width: 600px) {
    .img-title h2 {
        font-size: 20px;
    }

    .img-login {
        display: none;
    }

    .form {
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 14px;
        padding: 10px;
    }

    form {
        margin-top: 0;
    }

    input {
        width: 180px;
        margin: 10px;

    }

    .first-name,
    .last-name,
    .email,
    .password,
    .phone-humber,
    .psw {
        margin: 5px;
    }

    .bnt_login {
        width: 90%;
    }

}
</style>