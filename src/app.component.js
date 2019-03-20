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
      return this.$store.getters.IS_LOGIN
    }
  },
};


