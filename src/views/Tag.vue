<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="filterdPost.length > 0" class="layout">
      <PostList :posts="filterdPost" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import PostList from "@/components/PostList.vue";
import TagCloud from "@/components/TagCloud.vue";
import getPosts from "@/composables/getPosts";
import { useRoute } from "vue-router";
import Spinner from "@/components/Spinner.vue";
export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();
    const filterdPost = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.id));
    });
    return { posts, error, load, filterdPost };
  },
  // components: { PostList },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>