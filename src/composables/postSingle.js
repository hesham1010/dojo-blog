import { ref } from "vue";
const postSingle = (post) => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      });
      
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};
export default postSingle;
