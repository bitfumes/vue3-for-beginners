<template>
  <h1>Dc Heros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      {{ index }} : {{ hero.name }}
    </li>
  </ul>
  <input :[attribute]="newHero" />
  <button :disabled="isDisabled">Add Hero</button>
</template>

<script>
export default {
  data() {
    return {
      attribute: "value",
      isDisabled: true,
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