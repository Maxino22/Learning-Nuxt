<template>
  <div class="posts-page">
    <PostList posts="" />
  </div>
</template>

<script>
import PostPreview from '../../components/posts/PostPreview.vue';
import PostList from '../../components/posts/PostList.vue';

export default{
  components:{
    PostPreview,
    PostList
  },
  data(){
    return{
      loadedPosts:[
        {
          id:'1',
          title: 'Post 1',
          PostPreview: 'This is Post 1',
          thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          id:'2',
          title: 'Post 2',
          PostPreview: 'This is Post 1',
          thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300'
        }
      ]
    }
  }
}



</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}


.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

