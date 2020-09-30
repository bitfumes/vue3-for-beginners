<template>
  <h1 v-show="isShowing">{{ count }}</h1>
  <!-- <h3 v-else-if="isShowing === null">This is v-else-if</h3>
  <h2 v-else>This is v-else part</h2> -->
  <p>SOmething else</p>
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