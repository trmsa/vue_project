<template>
  <div class="card">
    <router-link :to="{name: 'showUser', params: {id: user.id}}">{{user.name}}</router-link>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">UserName: {{user.username}}</li>
      <li class="list-group-item">Email: {{user.email}}</li>
      <li class="list-group-item">Phone: {{user.phone}}</li>
    </ul>
  </div>
</template>

<script>

export default {
    props: {
        user: Object
    }
};
</script>

<style>
</style>