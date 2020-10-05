<template>
  <section>
    <div v-for="chat in state.chats" :key="chat.message">
      {{ chat.message }}
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase from "../utilities/firebase";
export default {
  setup() {
    const state = reactive({
      chats: {},
    });
    onMounted(async () => {
      const db = firebase.database();
      const collection = db.ref("chats");
      const data = await collection.once("value");
      state.chats = data.val();

      collection.on("value", (snapshot) => {
        state.chats = snapshot.val();
      });
    });

    return { state };
  },
};
</script>

<style></style>
