<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row>
                <v-col>
                    <p v-if="flag == 1">
                        <MyInformation/>
                    </p>
                    <p v-else-if="flag == 2">
                        <DestinationInformation/>
                    </p>
                    <p v-else-if="flag == 3">
                        <Result/>
                    </p>
                </v-col>
            </v-row>

            <v-row justify="center" align-content="center">
                <v-col cols="0" sm="3" md="3" lg="3"></v-col>

                <v-col id="center" cols="6" sm="3" md="3" lg="3">
                    <v-btn :color="iro_m" v-on:click="flag = 1, iro_m = 'grey', iro_d='white'">
                        自分の情報
                    </v-btn>
                </v-col>

                <v-col id="center" cols="6" sm="3" md="3" lg="3">
                    <v-btn :color="iro_d" v-on:click="flag = 2, iro_m = 'white', iro_d='grey'">
                        相手の情報
                    </v-btn>
                </v-col>

                <v-col cols="0" sm="3" md="3" lg="3"></v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  import MyInformation from "./MyInformation";
  import DestinationInformation from "./DestinationInformation";
  import Result from "./Result";

  export default {
    components: {Result, MyInformation, DestinationInformation},
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


    #center {
        text-align: center;
    }

</style>