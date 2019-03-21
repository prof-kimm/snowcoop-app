import MapView from '../../shared/map-view/map-view.component.vue';

export default {
  name: 'dashboardPage',
  components: {
    MapView
  },
  computed: {
    user() {
      return this.$store.getters.USER;
    }
  }
};
