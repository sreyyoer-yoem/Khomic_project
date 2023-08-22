<template>
    <FormLogin @button-clicked="login"/>
    
</template>
<script setup>
import FormLogin from "../components/form/FormLogin.vue";


const login = (user)=>{
    alert(user)
}

</script>
