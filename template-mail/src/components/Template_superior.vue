<template>
    <v-app>
        <v-container class="lighten-5">
          <p>{{Destination.name}}様</p>
          <p>いつも大変お世話になっております。</p>
          <p>{{My.department}}の{{My.name}}です。</p>
          <br><br>
          <p>本文</p>
          <br><br>
          <p>-------------------------------------</p>
          <p>{{My.department}}</p>
          <p>{{My.name}}</p>
          <p>Mail : {{My.email}}</p>
          <p>Tel  : {{My.tel}}</p>
          <p>-------------------------------------</p>
        </v-container>
    </v-app>
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