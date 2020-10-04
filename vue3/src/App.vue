<template>
  <AppHeader @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
export default {
  data() {
    return {
      isLoginOpen: false,
    };
  },
  components: { AppHeader, LoginModal },
};
</script>

<style></style>
