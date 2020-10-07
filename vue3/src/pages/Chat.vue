<template>
  <section class="flex w-full">
    <div class="m-auto w-full flex flex-wrap justify-center">
      <h1 class="text-center text-3xl my-4 w-full">Real Time Chat</h1>
      <div class="border rounded-lg w-10/12 md:w-4/12">
        <div class="h-64 p-2">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            class="w-full"
            :class="chat.userId === userId ? 'text-right' : ''"
          >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            v-model="state.message"
            placeholder="Start Typing..."
            class="p-1 border rounded shadow w-full"
            @keydown.enter="addMessage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { chatsRef } from "../utilities/firebase";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
    });

    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);

    onMounted(async () => {
      chatsRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    function addMessage() {
      const newChat = chatsRef.push();
      newChat.set({ userId: userId.value, message: state.message });
      state.message = "";
    }

    return { state, addMessage, userId };
  },
};
</script>

<style></style>
