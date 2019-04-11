<template>
  <div id="listPage">
      <div class="list-wrapper">
        <div class="list-header" v-if="listItems">
          <span class="list-title">{{ `You have ${listItems.length} addresses to complete` }}</span>
          <div class="list-header-button-wrapper">
            <button @click="dialogVisible = true">Add</button>
          </div>
        </div>
        <div class="list-view-wrapper">
          <el-card class="box-card">
            <map-view
              v-if="listItems"
              v-bind:showList="true"
              v-bind:addressList="listItems">
            </map-view>
          </el-card>
        </div>
    </div>
    <el-dialog
      title="Add New Address"
      :visible.sync="dialogVisible"
      width="30%">
      <span>
        <div class="form-body-wrapper">
          <el-form :model="formData" ref="formData" @focusout.native="updateIsFormValidated">
            <el-form-item :rules="rules.email" prop="email">
              <el-input placeholder="Email" v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item :rules="rules.password" prop="password">
              <el-input type="password" placeholder="Password" v-model="formData.password" show-password></el-input>
            </el-form-item>
          </el-form>
        </div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button class="submit-button" @click="dialogVisible = false">Submit</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>
