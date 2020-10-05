<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-useable Modal</h1>

      <Modal v-if="isModalOpen" @close="isModalOpen = false">
        <h1 class="text-red-500">Red Modal</h1>
      </Modal>
      <button @click="isModalOpen = true">Red Modal</button>

      <Modal v-if="isModalOpen" @close="isModalOpen = false">
        <h1 class="text-blue-500">Blue Modal</h1>
      </Modal>
      <button @click="isModalOpen = true">Blue Modal</button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";

export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false);
    return { isModalOpen };
  },
};
</script>

<style></style>
