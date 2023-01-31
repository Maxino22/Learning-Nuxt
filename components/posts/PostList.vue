<template>
 
    <section class="featured-posts">
  <PostPreview id="1" thumbnail="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300" title="Post one" preview-text="This is post one" />
  <PostPreview id="2" thumbnail="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300" title="Post two" preview-text="This is post one" />
  <PostPreview id="3" thumbnail="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300" title="Post three" preview-text="This is post one" />

</section>
 
</template>

<script>
import PostPreview from './PostPreview.vue';

export default{
  components:{
    PostPreview
  }
}



</script>

<style scoped>

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

