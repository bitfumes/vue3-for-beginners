<template>
  <h1 v-once>
    <span>Count is:</span>
    {{ count }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      title: "<h1>This is title inside h1 tag</h1>",
      isShowing: false,
      count: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  },
};
</script>