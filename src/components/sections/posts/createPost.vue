<template>
  <div class="col-md-6">
    <h2 class="mb-5">Create Post</h2>
    <formPosts @formData="createPost" :loding="loding" button-text="Create Post" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import Swal from "sweetalert2";
import formPosts from "../../form.vue";

export default {
  components: {
    formPosts,
  },
  setup() {
    const loding = ref(false);
    function createPost(formData) {
      loding.value = true;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: formData.title,
          body: formData.body,
          id: 1,
        })
        .then(function () {
          loding.value = false;
          formData.title = "";
          formData.body = "";
          Swal.fire({
            title: "Tanks!",
            text: "your posts created successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    return { createPost, loding };
  },
};
</script>

<style>
</style>