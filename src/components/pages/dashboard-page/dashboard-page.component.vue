<template>
  <div id="dashboardPage">
    <div class="dashboard-wrapper">
      <span class="welcome-title" v-if="user">
        {{ `Hi ${user.firstName}, welcome to Snowcoop` }}
      </span>
      <el-card class="box-card">
        <map-view
          v-if="listItems"
          v-bind:showList="false"
          v-bind:addressList="listItems">
        </map-view>
      </el-card>
    </div>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>
