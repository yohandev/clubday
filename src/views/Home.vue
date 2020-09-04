<template>
  <div class="home">
    <h1>LAHS Club Day 2020</h1>
    <button @click="navSelect()">Click Below to get started</button>
    <!--input v-model="name" type="text" class="form-control" placeholder="Event Name" aria-label="Name" aria-describedby="basic-addon1">
    <input v-model="descriptors" type="text" class="form-control" placeholder="Event Description" aria-label="Name" aria-describedby="basic-addon1">
    <button @click="Add()">Add</button-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from '../firebase.config';

// @ is an alias to /src
@Component
export default class Home extends Vue {
  name: string = "";
  descriptors: string = "";
  created() {
  }
  navSelect() {
    this.$router.push('/select')
  }
  Add() {
    var descriptors = this.descriptors.split(", ")
    var id = this.name.replace(/ /g, '-');
    firebase.db.collection('clubs').doc(id).set({
                name: this.name,
                descriptors: descriptors
            });
  }
}
</script>
