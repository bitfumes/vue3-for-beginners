<template>
  <div v-if="isOpen">
    <section
      @click="isOpen = false"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow">
          <h1>Login</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style></style>
