<template>
<<<<<<< HEAD
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText" />
  </section>
=======
 
    <section class="featured-posts">
  <PostPreview v-for="post in posts" :key="post.id"
  :id="post.id" :is-admin="isAdmin"  :thumbnail="post.thumbnail" :title="post.title" :preview-text="post.previewText" />
  

</section>
 
>>>>>>> 897fb075bc3371bfbb4ceeefcaff648edf1ac4e5
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
<<<<<<< HEAD
    posts: {
      type: Array,
      required: true
=======
    posts:{
      type: Array,
      required: true

>>>>>>> 897fb075bc3371bfbb4ceeefcaff648edf1ac4e5
    }
  }
}
</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

