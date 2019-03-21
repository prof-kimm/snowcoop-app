import { gmapApi } from "vue2-google-maps";


export default {
  name: 'mapView',
  props: {
    showList: Boolean,
    addressList: Array
  },
  computed: {
    google: gmapApi,
    
  },
  data() {
    return {
      center: { lat: 45.2498124, lng: -76.0811186 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.setPlace(this.addressList[0]);
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
      this.addMarker(place);
      /* eslint-disable */
      console.log(place);
    },
    addMarker(address) {
      if (address) {
        const marker = {
          lat: address.lat,
          lng: address.lng
        };
        this.markers.push({ position: marker });
        // this.places.push(address);
        this.center = marker;
        // this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};