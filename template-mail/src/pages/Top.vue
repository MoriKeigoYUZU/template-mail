<template>
    <v-app>
        <v-container class="lighten-5">
            <v-row>
                <v-col>
                    <p v-if="pagesFlag == 1">
                        <MyInformation/>
                    </p>
                    <p v-else-if="pagesFlag == 2">
                        <DestinationInformation/>
                    </p>
                    <p v-else-if="pagesFlag == 3">
                        <Result/>
                    </p>
                </v-col>
            </v-row>

            <v-row justify="center" align-content="center">
                <v-col cols="0" sm="2" md="2" lg="2"></v-col>

                <v-col id="center" cols="6" sm="4" md="4" lg="4">
                    <v-btn :color="buttonColor.My" @click="pages1"
                           v-on:click="pagesFlag = 1">
                        自分の情報
                    </v-btn>
                </v-col>

                <v-col id="center" cols="6" sm="4" md="4" lg="4">
                    <v-btn :color="buttonColor.Destination" @click="pages2"
                           v-on:click="pagesFlag = 2">
                        相手の情報
                    </v-btn>
                </v-col>

                <!--<v-col id="center" cols="4" sm="3" md="3" lg="3">-->
                <!--<v-btn :color="iro_r" v-on:click="pages = 3, iro_m = 'white', iro_d='white' , iro_r='grey'">-->
                <!--結果の情報-->
                <!--</v-btn>-->
                <!--</v-col>-->

                <v-col cols="0" sm="2" md="2" lg="2"></v-col>
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
      pages: 1,
    }),

    methods: {
      pages1() {
        this.$store.commit('pagesFlag', 1);
        this.$store.commit('myFlag');
      },
      pages2() {
        this.$store.commit('pagesFlag', 2);
        this.$store.commit('destinationFlag');
      },
      pages3() {
        this.$store.commit('pagesFlag', 3);
      },


    },

    computed: {
      pagesFlag() {
        return this.$store.getters['pagesFlag']
      },
      myFlag() {
        return this.$store.getters['myFlag']
      },

      destinationFlag() {
        return this.$store.getters['destinationFlag']
      },

      buttonColor() {
        return this.$store.getters['buttonColor']
      }

    }

  };
</script>

<style scoped>


    #center {
        text-align: center;
    }

</style>