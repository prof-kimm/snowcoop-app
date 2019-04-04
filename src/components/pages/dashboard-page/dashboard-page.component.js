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
  },
  data() {
    return {
      listItems: [
        {
          id: 1,
          street: '1385 Woodroffe Ave',
          city: 'Nepean',
          province: 'ON',
          postalCode: 'K2G 1V8',
          lat: 45.3483143,
          lng: -75.7584403
        },
        {
          id: 2,
          street: '10 Cordova St',
          city: 'Nepean',
          province: 'ON',
          postalCode: 'K2G 1M7',
          lat: 45.3558026,
          lng: -75.7491805
        },
        {
          id: 3,
          street: '92 Starwood Rd',
          city: 'Nepean',
          province: 'ON',
          postalCode: 'K2G 1Z5',
          lat: 45.3552559,
          lng: -75.7487076
        },
        {
          id: 4,
          address: '84 Starwood Rd',
          city: 'Nepean',
          province: 'ON',
          postalCode: 'K2G 1Z5',
          lat: 45.3557138,
          lng: -75.7477536
        },
        {
          id: 5,
          address: '76 B Starwood Rd',
          city: 'Nepean',
          province: 'ON',
          postalCode: 'K2G 1Z5',
          lat: 45.355987,
          lng: -75.747058
        }
      ]
    };
  }
};
