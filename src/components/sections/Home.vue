<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo,
          ut at reiciendis expedita nihil, nostrum eligendi asperiores officiis
          enim beatae, laudantium nobis? Officia, sint! Assumenda provident odit
          neque aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo,
          ut at reiciendis expedita nihil, nostrum eligendi asperiores officiis
          enim beatae, laudantium nobis? Officia, sint! Assumenda provident odit
          neque aliquid?
        </p>
      </div>
    </div>
  </div>
  <router-link :to="{name: 'users'}" class="btn btn-dark m-3">users</router-link>
  <router-link :to="{name: 'posts'}" class="btn btn-light">Posts</router-link>
</template>

<script>
export default {};
</script>

<style>
</style>