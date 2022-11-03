<template>
  <div v-if="loding" class="spinner-border text-info m-auto" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6">
    <div class="card">
      <div class="card-header">Title: {{ post.title }}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: {{ post.body }}</li>
      </ul>
      <div class="card-footer">
        <button @click="deletePost" class="btn btn-sm btn-danger me-3">
          Delete
        </button>
        <router-link
          class="btn btn-sm btn-dark"
          :to="{ name: 'editePost', params: { id: post.id } }"
          >Edite</router-link
        >
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
export default {
  setup() {
    const post = ref({});
    const loding = ref(true);
    const route = useRoute();
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
          loding.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPost();

    function deletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "note!",
            text: `your posts (${route.params.id}) deleted successfully`,
            icon: "warning",
            confirmButtonText: "ok",
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    return { post, loding, deletePost };
  },
};
</script>

<style>
</style>