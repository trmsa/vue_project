<template>
  <div v-if="loding" class="spinner-border text-info m-auto" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4">
    <userCardView :user="user" />
  </div>
  <button type="button" class="btn btn-danger mt-5" @click="goToUsers">Back</button>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import userCardView from "./cardView.vue";
import { useRoute, useRouter } from "vue-router";
export default {
  components: {
    userCardView,
  },
  setup() {
    const user = ref({});
    const loding = ref(true);
    const route = useRoute();
    const router = useRouter()
    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          user.value = response.data;
          loding.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    function goToUsers() {
        router.push('/users')
    }
    getUser();
    return { user, loding, goToUsers };
  },
};
</script>

<style>

</style>