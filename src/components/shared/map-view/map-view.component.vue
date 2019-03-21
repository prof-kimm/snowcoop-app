<template>
  <div id="mapView">
    <div class="address-list">
      <div class="items-wrapper" v-if="showList && addressList">
        <div v-for="address in addressList" :key="address.id" class="text item">
          {{'List item ' + address.address }}
        </div>
      </div>
      <div class="map-wrapper">
        <gmap-map
          :center="center"
          :zoom="12"
          style="width:100%;  height: 400px;">
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script src="./map-view.component.js"></script>
<style src="./map-view.component.css" scoped></style>