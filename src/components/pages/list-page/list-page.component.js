import MapView from '../../shared/map-view/map-view.component.vue';

export default {
  name: 'listPage',
  components: {
    MapView
  },
  mounted() {
    this.$store.dispatch('GET_ADDRESS_LIST').then(
      (addressList) => {
        this.listItems = addressList;
      }
    );
  },
  data() {
    return {
      listItems: null
    };
  }
};
