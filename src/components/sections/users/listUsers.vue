<template>
  <div v-if="loding" class="spinner-border text-info m-auto" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4" v-for="user in users" :key="user.id">
    <userCardView :user="user" />
  </div>

  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import userCardView from "./cardView.vue";
export default {
  components: {
    userCardView,
  },
  setup() {
    const users = ref([]);
    const loding = ref(true);
    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
          loding.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();
    return { users, loding };
  },
};
</script>

<style>
</style>