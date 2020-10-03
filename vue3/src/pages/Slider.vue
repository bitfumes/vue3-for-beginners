<template>
  <div class="flex flex-wrap w-full">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <div
        v-if="currentSlide == index"
        :class="color"
        style="height:350px"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      sliders: ["bg-teal-600", "bg-blue-600", "bg-yellow-600"],
      interval: "",
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style></style>
