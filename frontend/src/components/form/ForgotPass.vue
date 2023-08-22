<template>
    <div id="app">
        <div class="container_big">
            <div class="contaner mt-5">
                <div class="img-login">
                    <img src="../../assets/login.png" alt="login">
                </div>
                <div class="form">
                    <div class="title">
                        <!-- <img src="../../assets/user.png" alt=""> -->
                        <h4>Reset Password</h4>

                    </div>
                    <form @submit.prevent="forgotPassword">
                        <div class="email">
                            <label for="email">Enter your Email</label>
                            <input class="form-control" type="email" placeholder="" aria-label="default input example" v-model="email">
                            <span>{{ vali_email }}</span>
                        </div>
                        <button type="submit" class="send bg-danger">Send</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="dailog_info"  v-if="isSendMail">
            <div class="icon_done  icon_success mb-4">
                <img src="../../assets/icon_done1.png" alt="">
            </div>
            <h6>Please check your gmail to reset password!</h6>
            <button class="bnt_ok bg-danger p-1" @click="hied_dailoge">ok</button>

        </div>
    </div>
    
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';


const email = ref("")
const isSendMail = ref(false);
const vali_email = ref("")
const forgotPassword=()=>{
    //Validation email
    if(email.value == ""){
        vali_email.value = "Email must be input!"
    }
    axios.post('http://localhost:2000/user/forgotpassword',{email:email.value})
    .then(()=>{
        isSendMail.value = true;
    })
    .catch(err =>{
        console.log(err);
        const error = err.response.data;
        console.log(error);
        if(err.response.data.code == 404){
            vali_email.value = err.response.data.error;
        }
        if(err.response.data.code == 412){
            vali_email.value = err.response.data.error;
        }
    })
}
const hied_dailoge = () => {
    isSendMail.value = false;
}

</script>
<style scoped>
.icon_done img {
    width: 50px;
    height: 50px;
}
.bnt_ok{
    padding: 5px;
    width: 50px;
}
.dailog_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(40, 42, 42);
    border-radius: 5px;
    padding: 5px;
    margin-top: -46%;
    margin-left: 25%;
    width: 50%;
    color: white;
}
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
    width: 50%;
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

.title {
    display: flex;
    flex-direction: column;
    /* background-color: aquamarine; */
    text-align: center;
    margin: 15%;
}

input {
    padding: 10px;
    width: 100%;
    border-radius: 5px;
   
}

button {
    width: 84%;
    border-radius: 5px;
    border: none;
    padding: 8px;
    color: white;
}

.email,
.psw {
    margin: 10px;
}




.img-login img {
    width: 300px;
    height: 300px;
}

.send {
    width: 65%;
    margin-bottom: 15px;
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