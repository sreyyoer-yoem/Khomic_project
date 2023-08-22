<template>
    <h2 class="text-success">Product</h2>
    <table class="table table-bordered w-200">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Size</th>
      <th scope="col">Price</th>
      <th scope="col">Photo</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="(pro,index ) of products.product" :key="pro">
      <th scope="row">{{ index +1 }}</th>
      <td>{{ pro.name }}</td>
      <td>{{ pro.size }}</td>
      <td>{{ pro.price }}</td>
      <!-- <td><img :src="" alt=""></td> -->
    </tr>
   
  </tbody>
</table>
</template>
<script setup>
import { defineProps } from 'vue'
const products = defineProps(['product'])


</script>