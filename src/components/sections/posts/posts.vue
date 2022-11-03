<template>
<div>
  <router-link class="btn btn-dark" :to="{name: 'createPost'}">Create</router-link>
</div>
  <div v-if="loding" class="spinner-border text-info m-auto" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
    <div class="card">
      <router-link class="card-header" :to="{name: 'showPost', params: {id: post.id}}">Title: {{ post.title }}</router-link>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: {{ post.body }}</li>
      </ul>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const posts = ref([]);
    const loding = ref(true);
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          posts.value = response.data;
          loding.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPosts();
    return { posts, loding };
  },
};
</script>

<style>
</style>