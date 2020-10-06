<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center my-4">Dc Heros {{ herosCount }}</h1>
    <ul class="border rounded p-2">
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded px-2"
        v-model="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white ml-2 px-2"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      { name: "SuperGirl" },
      { name: "Flash" },
      { name: "Batman" },
      { name: "Arrow" },
      { name: "SuperMan" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    const herosCount = computed({
      get: () => dcHeros.value.length,
    });

    function remove(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
    }

    function addHero() {
      if (newHero.value !== "") {
        dcHeros.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }

    return { dcHeros, newHero, remove, addHero, newHeroRef, herosCount };
  },
};
</script>

<style></style>
