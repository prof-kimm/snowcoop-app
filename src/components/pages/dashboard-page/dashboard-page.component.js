export default {
  name: 'dashboardPage',
  computed: {
    user() {
      return this.$store.getters.USER;
    }
  },
};
