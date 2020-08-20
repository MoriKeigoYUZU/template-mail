<template>
    <p>
        {{Destination.name}}様<br>
        いつも大変お世話になっております。<br>
        {{My.department}}の{{My.name}}です。<br>
        <br><br>
        本文<br>
        <br><br>
        -------------------------------------<br>
        {{My.department}}<br>
        {{My.name}}<br>
        Mail : {{My.email}}<br>
        Tel : {{My.tel}}<br>
        -------------------------------------<br>
    </p>
</template>

<script>
  export default {
    name: "Template_superior",
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