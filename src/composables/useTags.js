import { ref } from "vue";
const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();
  posts.forEach((items) => {
    items.tags.forEach((tag) => tagSet.add(tag));
  });
  console.log(tagSet);
  tags.value = [...tagSet];
  return { tags };
};
export default useTags;
