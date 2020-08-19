<template>
    <v-app>
        <v-container class="lighten-5">
            <p v-if="flag == 1">
                <MyInformation/>
            </p>
            <p v-else-if="flag == 2">
                <DestinationInformation/>
            </p>

            <v-row justify="center" align-content="center">
                <v-col cols="3"></v-col>
                <v-col cols="3">
                    <v-btn :color="iro_m" v-on:click="flag = 1, iro_m = 'grey', iro_d='white'">My Information</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn
                            :color="iro_d"
                            v-on:click="flag = 2, iro_m = 'white', iro_d='grey'"
                    >Destination Information
                    </v-btn>
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>

            <v-row id="radius">
                <v-col id="padding">
                    <v-btn color="blue" dark @click="sheet = !sheet">
                        <router-link to="/MyInformation">MyInformation</router-link>
                    </v-btn>

                    <v-btn color="orange" dark v-bind="attrs" v-on="on">
                        <router-link to="/DestinationInformation">DestinationInformation</router-link>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  import MyInformation from "./MyInformation";
  import DestinationInformation from "./DestinationInformation";

  export default {
    components: {MyInformation, DestinationInformation},
    name: "Top",
    data: () => ({
      flag: 1,
      iro_m: "grey",
      iro_d: "white",
    }),

    methods: {},

    computed: {
      // flag() {
      //   return this.$store.getters['flag']
      // },
    }

  };
</script>

<style scoped>
</style>