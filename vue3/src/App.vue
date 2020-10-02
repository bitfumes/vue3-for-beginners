<template>
  <AppHeader />
  <div class="w-full flex">
    <!-- <DcHeros /> -->
    <Calendar />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import Calendar from "./components/Calendar";
// import DcHeros from "./components/DcHeros";
export default {
  components: { AppHeader, Calendar },
};
</script>

<style></style>
