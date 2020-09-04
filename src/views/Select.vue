<template>
  <div class="select">
    <h1>Select Clubs Below!</h1>
    <!-- This is a draggable list to rank club choice; outputs an array ordered by preference-->
    <draggable v-model="descriptionList" group="people" @start="drag=true" @end="drag=false">
      <div class="card" v-for="description in descriptionList" :key="description">
        <h1>{{description.name}}</h1>
        <!-- Users can shut off certain interests -->
        <ion-icon name="heart" style="margin-top: -50px; color: rgb(255, 80, 133);" v-if="description.interest == true" @click="toggle(description)"></ion-icon>
        <ion-icon name="heart" style="margin-top: -50px; color: gray;" v-else @click="toggle(description)"></ion-icon>
      </div>
    </draggable>
    <button @click="navClubs()">Click Below to see clubs!</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from '../firebase.config';
import draggable from 'vuedraggable';

// @ is an alias to /src
@Component({
  components: {
    draggable
  }
})

export default class Select extends Vue {
  descriptionList: Array<any> = [];
  userPreferences: Array<any> = [];

  created() {
    var descriptions = firebase.db.collection("clubs").doc("main-club")
    descriptions.get().then(doc => {
      this.descriptionList = doc.data().descriptors;
      for (var i=0; i<this.descriptionList.length; i++) {
        this.descriptionList[i] = {name: this.descriptionList[i], interest: true}
      }
    })
  }

  navClubs() {
    for (var i=0; i<this.descriptionList.length; i++) {
      if (this.descriptionList[i].interest == true) {
        this.userPreferences.push(this.descriptionList[i].name)
      }
    }
    this.$store.commit("setPreferences", this.userPreferences);
    this.$router.push('/clubs')
  }
  
  toggle(description: any) {
    console.log('toggle')
    var substituteList = this.descriptionList;
    if (description.interest == true) {
      substituteList[this.descriptionList.indexOf(description)] = {name: description.name, interest: false};
    }
    else {
      substituteList[this.descriptionList.indexOf(description)] = {name: description.name, interest: true};
    }
    this.descriptionList = [];
    this.descriptionList = substituteList;
  }
}
</script>

<style scoped>
.card {
  margin: 0  10% 0 10%;
  width: 80%;
  height: 50px;
  border: solid lightgray 1px;
  background: rgb(240, 240, 240);
}
.card h1 {
  font-size: 24px;
  margin: 0;
  min-height: 50px;
  padding: 10px;
  text-align: justify;
}
.card ion-icon {
  position: relative;
  font-size: 48px;
  float: right;
  margin-right: 10px;
}
</style>
