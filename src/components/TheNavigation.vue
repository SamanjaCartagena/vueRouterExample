<template>
<div>
  <ul class="nav justify-content-center">
  <li class="nav-item">
   <router-link to="/" class="nav-link">Home</router-link>
  </li>
  <li class="nav-item">
   <router-link to="/posts" class="nav-link">Posts</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/createpost" class="nav-link">Create Posts</router-link>
  </li>
  
</ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
a.active {
    background: #bbb;
}
</style>