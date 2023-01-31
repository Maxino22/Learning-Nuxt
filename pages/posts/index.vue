<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
import PostPreview from '../../components/posts/PostPreview.vue';
import PostList from '../../components/posts/PostList.vue';

export default{
  components:{
    PostPreview,
    PostList
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

