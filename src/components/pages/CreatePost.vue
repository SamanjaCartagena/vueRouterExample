<template>
  <div>
    <h3>Create Posts</h3>
    <form @submit.prevent="onCreatePost()">
      <div class="form-group">
       <label>Title</label>
       <input type="text" class="form-control" v-model="title"/>
      </div>
      <div class="form-group">
       <label>Description</label>
       <textarea
          class="form-control"
          v-model="description"
       ></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">
          Create Post
          </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'CreatePosts',
  data(){
    return {
      title:'',
      description:''
    }
  },
  methods:{
    onCreatePost(){
      axios.post(`https://testingwithvue-default-rtdb.firebaseio.com/posts.json`,
      {
         title:this.title,
         description:this.description
      }).then(response =>{
        console.log(response)
        this.$router.push('/posts');
      })
    }

  }
}
</script>

<style>

</style>