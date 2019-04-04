<template>
  <div id="listPage">
      <div class="list-wrapper">
        <el-card class="box-card">
          <div class="address-list">
            <map-view
              v-if="listItems"
              v-bind:showList="true"
              v-bind:addressList="listItems">
            </map-view>
          </div>
      </el-card>
    </div>
  </div>
</template>
<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>
