<template>
  <div id="listPage">
      <div class="list-wrapper">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Card name</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>
          <div class="address-list">
            <map-view v-bind:showList="true" v-bind:addressList="listItems"></map-view>
          </div>
      </el-card>
    </div>
  </div>
</template>
<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>
