<template>
  <h2 class="text-success">List Of Users</h2>
  <table class="table table-bordered w-200">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">username</th>
    <th scope="col">email</th>
    <th scope="col">password</th>
    <th scope="col">Phone number</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>
  
  <tr v-for="(user,index ) of listUsers.users" :key="user">
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ user.username }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.password }}</td>
    <td>{{ user.phone_number }}</td>
    <td>
      <i class="material-icons mr-3 text-danger" @click="deleteUser(user.id)">delete</i>
      <i class="material-icons text-primary"  @click="updatUser(user.id)">edit</i>
    </td> 
  </tr>
</tbody>
</table>
</template>
<script setup>
import axios from 'axios';
import { defineProps } from 'vue';
import {useRouter} from 'vue-router';
const listUsers = defineProps(['users'])
const router = useRouter();

const  deleteUser = (id)=> {
  axios.delete("http://localhost:2000/delete/" + id)
  .then(response =>{
    router.push({nam:'home'})
    console.log("deleted user successfully", response);
  })
  .catch(error=>{
    console.log(error);
  })

}
const  updatUser = (id)=> {
  axios.delete("http://localhost:2000/update/" + id)
  .then(response =>{
    router.push({nam:'home'})
    console.log("deleted user successfully", response);
  })
  .catch(error=>{
    console.log(error);
  })
  
  
}


</script>
<style>
i:hover{
  cursor: pointer;

}
</style>