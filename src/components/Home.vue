<template>
    <div>
        <h1>Home page! MOTD: {{msg}}</h1>
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
            console.log("created home.vue");
        }
    });
</script>