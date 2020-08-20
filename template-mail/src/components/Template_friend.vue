<template>
    <p>
        こんにちは。<br>
        お元気でしたか？<br>
        {{My.name}}です。<br>
        <br><br>
        本文<br>
        <br><br>
        -------------------------------------<br>
        {{My.name}}<br>
        Mail : {{My.email}}<br>
        Tel : {{My.tel}}<br>
        -------------------------------------<br>
    </p>
</template>

<script>
  export default {
    name: "Template_friend",
    data: () => ({}),
    methods: {},

    computed: {
      My() {
        return this.$store.getters['My']
      },

      Destination() {
        return this.$store.getters['Destination']
      }
    },
  };

</script>

<style scoped>


    #center {
        text-align: center;
    }

</style>