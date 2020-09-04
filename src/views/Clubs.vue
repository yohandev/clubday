<template>
  <div class="clubs">
    <div v-for="club in powerList" :key="club">
        <p>{{club.data.name}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from '../firebase.config';

// @ is an alias to /src
@Component
export default class Clubs extends Vue {
    preferences: Array<string> = [];
    powerList: Array<any> = [];
    created() {
        this.preferences = this.$store.state.userPreferences;
        this.makeAlgorithm();
    }
    makeAlgorithm() {
        var allClubs = firebase.db.collection('clubs')
        allClubs.get().then(snapshot => {
            snapshot.forEach(doc => { 
                if (doc.id != "main-club") {
                    this.powerList.push({id: doc.id, data: doc.data(), desirability: 0})
                }
            })
            this.organize(this.powerList);
        })
    }
    organize(powerList: Array<any>) {
        for (var i=0; i<this.preferences.length; i++) {
            var preference = this.preferences[i];
            var preferenceValue = this.preferences.length - i;
            for (var j=0; j<powerList.length; j++) {
                if (powerList[j].data.descriptors.includes(preference)) {
                    powerList[j].desirability = powerList[j].desirability + preferenceValue;
                }
            }
        }
        this.powerList.sort(function(a, b) {
			return b.desirability - a.desirability
		})
    }
    navAbout() {
        this.$router.push('/about');
    }
}
</script>
