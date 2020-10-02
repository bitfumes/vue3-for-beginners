<template>
  <h1>Dc Heros {{ herosCount }}</h1>
  <h2>{{ fullname }}</h2>
  <h2>{{ fname }} {{ lname }}</h2>
  <p>{{ randC }}</p>
  <p>{{ randC }}</p>
  <p>{{ randC }}</p>
  <p>{{ randM() }}</p>
  <p>{{ randM() }}</p>
  <p>{{ randM() }}</p>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      {{ hero.name }}
    </li>
  </ul>
  <form @submit.prevent="addHero">
    <input v-model="newHero" placeholder="Type Hero Name Here" />
    <button type="submit">Add Hero</button>
  </form>
  <button @click="setFullName">Set FUll Name</button>
  <small>Total Heros in the list is {{ herosCount }}</small>
</template>

<script>
export default {
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
    randC() {
      return this.dcHeros.length + Math.random();
    },
    fullname: {
      get() {
        return `Full name is ${this.fname} ${this.lname}`;
      },
      set(fullname) {
        const values = fullname.split(" ");
        this.fname = values[0];
        this.lname = values[1];
      },
    },
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    randM() {
      return Math.random();
    },
    setFullName() {
      this.fullname = "Bitfumes Tutorial";
    },
  },
  data() {
    return {
      newHero: "",
      fname: "Sarthak",
      lname: "Shrivastava",
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