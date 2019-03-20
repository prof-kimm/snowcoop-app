import SideNavigation from './components/side-navigation/side-navigation.component.vue';

export default {
  name: 'app',
  components: {
    SideNavigation
  },
  computed: {
    isLogIn() {
      /* eslint-disable */
      console.log(this.$store.getters.IS_LOGIN);

      /* eslint-disable */
      console.log(process.env.VUE_APP_GOOGLE_API_KEY);
      console.log(process.env.NODE_ENV);
      return this.$store.getters.IS_LOGIN
    }
  },
};


