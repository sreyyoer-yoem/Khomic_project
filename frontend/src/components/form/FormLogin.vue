<template>
    <div id="app">
        <div class="contaner mt-5">
            <div class="img-login">
                <img src="../../assets/login.png" alt="login">
            </div>
            <div class="form">
                <div class="img-title">
                    <img src="../../assets/user.png" alt="">
                    <h2>Login Your Account</h2>
                </div>
                <form @submit.prevent="login">
                    <div class="email">
                        <label for="email"><b>Email</b></label><br>
                        <input class="form-control" type="email" placeholder="Email" aria-label="default input example" v-model="email" >
                        <span>{{ vali_email }}</span>
                       
                    </div>
                    <div class="password">
                        <label for="password"><b>Password</b></label><br>
                        <input class="form-control" type="password" placeholder="Password" aria-label="default input example" v-model="password"  >
                        <span>{{ vali_pass }}</span>

                    </div>
                    <!-- <a href="">Forgot Password

                    </a> -->
                    <router-link to="/forgotPass" class="text-dark " style="text-decoration: none;">Forgot Password</router-link>
                    <button type="submit" class="bnt_login bg-danger">Login</button>
                </form>
            </div>
        </div>
    
        <div class="dailog_info" v-if="isNotverify">
            <div class="icon_done ">
                <img src="../../assets/cancel.png" alt="">
            </div>
            <h6>{{ notVerify }}</h6>
            <h6>Please verifycation email in your Gmail</h6>
            <button class=" bnt_ok bg-danger  p-1" @click="hied_dailoge">ok</button>

        </div>
        <!-- sreyyoeryoem@gmail.com -->
        
      
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
const email = ref('');
const password = ref('');
const vali_email = ref('');
const vali_pass = ref('');
const isNotverify = ref(false);
// const message = ref('');
const notVerify = ref('');
const validation = ref('');

const login = () => {
    const user = {
        email: email.value,
        password: password.value
    }
    if(email.value == ""){
        vali_email.value = "Email must be input!"
    }
    if(password.value == ""){
        vali_pass.value = "password must be input!";
    }else{
        axios.post('http://localhost:2000/user/login', user,{withCredentials:true})
        .then(res=>{
            // isSuccess.value = true;
            window.location.href = "/"
            validation.value = res.data[0].path[0];
    
            // message.value = res.data.;
        })
        .catch(err=>{
            console.log(err);
            const codeError = err.response.data.code;
            // const error = err.response.status;
            if(codeError == 412){
                isNotverify.value = true;
                notVerify.value = err.response.data.error

            }
            if(codeError == 404){
                // console.log(err.response.data.error);
                vali_email.value = err.response.data.error;
                vali_pass.value = err.response.data.error;
            }
        })

    }
    
    
};
const hied_dailoge = () => {
    isNotverify.value = false;
}

// Validation 



</script>
<style scoped>
.icon_done img {
    width: 70px;
    height: 70px;
}
.bnt_ok{
    width: 50px;
}

.dailog_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(143, 136, 138, 0.871);
    border-radius: 5px;
    margin-top: -30%;
    color: white;
    width: 40%;
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
span{
    color: red;
    font-size: small;
}


.contaner {
    background-color: aliceblue;
    display: flex;
    border-radius: 5px;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

}

.form {
    background-color: white;
    padding: 10px;
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
    width: 300px;
    border-radius: 5px;
    margin-top: 5px;
}

.email,
.psw {
    margin: 10px;
}

button {
    padding: 10px;
    width: 300px;
    border-radius: 5px;
    color: white;
    margin: 10px;
    border: none;
}

button:hover {
    background-color: green;
}

.img-login img {
    width: 350px;
    height: 350px;
}

@media (min-width: 601px) and (max-width: 1024px) {
    .contaner{
        flex-direction: column;
    }
    .img-register{
        width: 400px;
        height: 500px;
    }
    .img-title h2{
        font-size: 25px;
    }
    /* .img-register{
        display: none;
    } */
    
    .form{
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 14px;
    }
    form{
        margin-top: 0;
    }
    input{
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

.bnt_login{
    background-color: antiquewhite;
    width: 250px;
    
    
}
    
}
@media (max-width: 600px) {
    .img-title h2{
        font-size: 20px;
    }
    .img-login{
        display: none;
    }
    
    .form{
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 14px;
        padding: 10px;
    }
    form{
        margin-top: 0;
    }
    input{
        width: 200px;
        
    }
    .first-name,
.last-name,
.email,
.password,
.phone-humber,
.psw {
    margin: 5px;
}
.bnt_login{
    width: 90%;
}

}

</style>