<template>
  <div>
    <div>
      <button @click.prevent="onPostsClick()">Click to posts page</button>
    </div>
    <div>Home Page</div>
  </div>

</template>

<script>

export default {

  components:{


},
methods:{
  onPostsClick(){
    this.$router.push({path:'/posts', query:{id:1}});
  }
}

}
</script>

<style>

</style>