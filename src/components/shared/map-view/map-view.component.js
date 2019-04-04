import { gmapApi } from "vue2-google-maps";


export default {
  name: 'mapView',
  props: {
    showList: Boolean,
    addressList: Array
  },
  computed: {
    google: gmapApi,
    zoomValue() {
      return this.currentPlace ? 18 : 14;
    },
  },
  data() {
    return {
      // center: { lat: 45.2498124, lng: -76.0811186 },
      center: null,
      markers: [],
      places: [],
      currentPlace: null,
      currentMarker: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    };
  },

  mounted() {
    this.initPlaces(this.addressList);
  },

  methods: {
    initPlaces(addressList) {
      this.markers = addressList.map(address => this.buildMarker(address));
      this.center = this.markers[0].position;
    },

    buildMarker(address) {
      const marker = {
        lat: address.lat,
        lng: address.lng
      };
      return { position: marker };
    },

    setLocation(address) {
    /* eslint-disable */
      console.log(address);
      this.center = this.buildMarker(address).position;
      this.currentPlace = address;
    },

    markerOptions(address) {
      return address.id === this.currentPlace.id ? { url: this.currentMarker } : null;
    },

    getCurrerntLocation() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};