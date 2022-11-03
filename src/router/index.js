import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/sections/Home.vue';

import templateUsers from '../components/sections/users/templateUsers.vue';
import users from '../components/sections/users/listUsers.vue';
import showUser from '../components/sections/users/showUser.vue';

import templatePosts from '../components/sections/posts/templatePosts.vue';
import posts from '../components/sections/posts/posts.vue';
import showPost from '../components/sections/posts/showPost.vue';
import createPost from '../components/sections/posts/createPost.vue';
import editePost from '../components/sections/posts/edite.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/users', name: 'templateUsers', component: templateUsers, children: [
        { path: '', name: 'users', component: users },
        { path: ':id', name: 'showUser', component: showUser },
      ]
    },
    {
      path: '/posts', name: 'templatePosts', component: templatePosts, children: [
        { path: '', name: 'posts', component: posts },
        { path: ':id', name: 'showPost', component: showPost },
        { path: 'create', name: 'createPost', component: createPost },
        { path: 'edite/:id', name: 'editePost', component: editePost },
      ]
    },

  ]
})

export default router
