<template>
    <div>
        <h1>Clubs page! MOTD: {{msg}}</h1>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend(
    {
        data: function()
        {
            return { name: 'Hello World!' }
        },
        created: function()
        {
            console.log("created clubs.vue");
        }
    });
</script>