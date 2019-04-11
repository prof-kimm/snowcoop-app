import MapView from '../../shared/map-view/map-view.component.vue';

export default {
  name: 'dashboardPage',
  components: {
    MapView
  },
  mounted() {
    this.$store.dispatch('GET_ADDRESS_LIST').then(
      (addressList) => {
        this.listItems = addressList;
        /* eslint-disable */
        console.log(addressList);
      }
    );
  },
  computed: {
    user() {
      const userObj = this.$store.getters.USER;
      return typeof userObj === 'string' ? JSON.parse(this.$store.getters.USER) : userObj
    }
  },
  data() {
    return {
      listItems: null
    };
  }
};
