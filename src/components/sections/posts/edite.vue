<template>
<div v-if="pageLoding" class="spinner-border text-info m-auto" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6">
    <h2 class="mb-5">Edite Post</h2>
     <formPosts @formData="updatepost" :loding="loding" button-text="Edite Post" :post="post" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import formPosts from "../../form.vue";
export default {
  components: {
    formPosts,
  },
  setup() {
    const loding = ref(false);
    const pageLoding = ref(true);
    const post = ref({});
  

    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data
          pageLoding.value = false
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getPost();

   

    function updatepost(formData) {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: route.params.id,
        })
        .then(function (response) {
          console.log(response.data);
          loding.value = false;
          Swal.fire({
            title: "Tanks!",
            text: "your posts update successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    return {  updatepost, loding, post, pageLoding };
  },
};
</script>

<style>
</style>