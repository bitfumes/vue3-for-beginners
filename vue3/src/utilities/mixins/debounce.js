export default {
  data() {
    return {
      timeout: "",
    };
  },
  methods: {
    debounce(func, wait = 1000) {
      console.log("i am from mixin");
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait);
    },
  },
};
