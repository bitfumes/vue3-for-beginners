<template>
  <h1 v-html="title"></h1>
  <p>SOmething else</p>
</template>

<script>
export default {
  data() {
    return {
      title: "<h1>This is title inside h1 tag</h1>",
    };
  },
};
</script>