<template>
  <div id="dashboardPage">
    <div class="dashboard-wrapper">
      <span class="welcome-title" v-if="user">
        {{ `Hi ${user.firstName}, welcome to Snowcoop` }}
      </span>
      <map-view v-bind:showList="false"></map-view>
    </div>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>
