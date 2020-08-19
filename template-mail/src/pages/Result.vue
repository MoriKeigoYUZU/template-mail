<template>
  <v-app>
    <v-container class="lighten-5">
      <p v-if="flag == 1">
        <SuperiorResult />
      </p>
      <p v-else-if="flag == 2">
        <FriendResult />
      </p>
      <p v-else-if="flag == 3">
        <RelativeResult />
      </p>

      <v-row justify="center" align-content="center">
        <v-col cols="4">
          <v-btn v-on:click="flag = 1">目上の人</v-btn>
        </v-col>

        <v-col cols="4">
          <v-btn v-on:click="flag = 2">友達</v-btn>
        </v-col>

        <v-col cols="4">
          <v-btn v-on:click="flag = 3">身内</v-btn>
        </v-col>
      </v-row>
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
  data: () => ({
    flag: 0,
  }),
};
</script>

<style scoped>
</style>