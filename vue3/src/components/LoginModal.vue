<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <section class="mt-5 text-center">
            <button class="border px-2 rounded" @click="loginWithGoogle">
              Login With Google
            </button>
          </section>
          <p class="my-3 text-center">Or</p>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label>Email or Username</label>
              <input
                ref="emailRef"
                v-model="email"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your email or username"
              />
            </div>
            <div class="my-4">
              <label>Password</label>
              <input
                v-model="password"
                class="rounded shadow p-2 w-full"
                type="password"
                placeholder="enter your password"
              />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>⌛</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      email: "sarthak@bitfumes.com",
      password: "password",
      isLoading: false,
    };
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login");
    },
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.close();
        });
    },
  },
};
</script>

<style></style>
