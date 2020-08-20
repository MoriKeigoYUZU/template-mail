<template>
  <v-app>
    <v-container class="lighten-5">
        
      <p v-if="Destination.select == '上司，目上の人'">
        <SuperiorResult />
      </p>
      <p v-else-if="Destination.select == '友達'">
        <FriendResult />
      </p>
      <p v-else-if="Destination.select == '身内'">
        <RelativeResult />
      </p>

    </v-container>
  </v-app>
</template>

<script>
import SuperiorResult from "./SuperiorResult";
import FriendResult from "./FriendResult";
import RelativeResult from "./RelativeResult";

export default {
  components: { SuperiorResult, FriendResult, RelativeResult },
  name: "Result",
  data: () => ({flag: 0}),

  computed: {
      Destination() {
        return this.$store.getters['Destination']
      }
    },
};
</script>

<style scoped>
</style>