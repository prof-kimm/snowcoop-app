<template>
  <div id="mapView">
    <div class="address-list">
      <div class="items-wrapper" v-if="showList && addressList">
        <div 
          v-for="address in addressList"
          :key="address.id"
          class="address-item"
          v-bind:class="{ 'current-place': currentPlace && address.id === currentPlace.id }"
          @click="setLocation(address)">
          {{ address.street }}
        </div>
      </div>
      <div class="map-wrapper">
        <gmap-map
          v-if="center"
          :center="center"
          :zoom="zoomValue"
          style="width:100%; height: 400px;">
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