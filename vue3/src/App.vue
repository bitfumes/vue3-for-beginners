<template>
  <h1>Dc Heros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros">{{ index }} : {{ hero.name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
        { name: "SuperMan" },
      ],
    };
  },
};
</script>

<style>
</style>