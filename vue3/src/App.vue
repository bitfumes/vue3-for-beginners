<template>
  <h1>Dc Heros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      {{ index }} : {{ hero.name }}
    </li>
  </ul>
  <input v-model.number="newHero" />
  <button>Add Hero</button>
</template>

<script>
export default {
  data() {
    return {
      newHero: "Aquaman",
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