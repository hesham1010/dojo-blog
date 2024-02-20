<script>
import { ref } from "vue";
import PostList from "@/components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "@/components/Spinner.vue";
export default {
  name: "HomeView",
  components: { PostList, Spinner },
  setup() {
    const showPosts = ref(true);
    const { posts, error, load } = getPosts();
    load();
    return { posts, showPosts, error };
  },
};
</script>
<template>
  <div>
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
    <button @click="() => (showPosts = !showPosts)">toggle Posts</button>
    <button @click="posts.pop()">Delte Post</button>
  </div>
</template>

