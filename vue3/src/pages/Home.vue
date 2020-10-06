<template>
  <div class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl md:text-4xl my-2">
        Welcome to Vue 3 Full Course
      </h1>
      <div class="">
        <h2 class="text-xl md:text-2xl my-2 text-center w-full">
          10 Apps in 10 Hours
        </h2>
        <div class="flex justify-center">
          <div class="w-8/12 md:w-1/3">
            <div
              v-for="app in list"
              :key="app.path"
              class="text-left w-64 my-2"
            >
              <router-link class="w-full" :to="app.path">
                🔷 {{ app.title }}</router-link
              >
            </div>
            <div class="text-left w-64 my-2">
              🔷 Login Modal
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const list = ref([
      { path: "/dc-heros", title: "DcHeros" },
      { path: "/calendar", title: "Calendar" },
      { path: "/markdown", title: "Markdown" },
      { path: "/slider-carousel", title: "Slider" },
      { path: "/calculator", title: "Calculator" },
      { path: "/resuseable-modal", title: "ReuseableModal" },
      { path: "/chat", title: "Chat" },
      { path: "/user-crud", title: "UserCrud" },
      { path: "/tensorflow", title: "Tensorflow" },
    ]);

    return { list };
  },
};
</script>

<style></style>
