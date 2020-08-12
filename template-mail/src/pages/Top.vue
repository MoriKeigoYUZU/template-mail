<template>
    <v-app>
        <v-container class="lighten-5">

            <v-row id="radius">
                <v-col id="padding">
                    <v-btn
                            color="blue"
                            dark
                            @click="sheet = !sheet"
                    >
                        <router-link to="/MyInformation">MyInformation</router-link>
                    </v-btn>

                    <v-btn
                            color="orange"
                            dark
                            v-bind="attrs"
                            v-on="on"
                    >
                        <router-link to="/DestinationInformation">DestinationInformation</router-link>
                    </v-btn>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    name: "Top"
  }
</script>

<style scoped>

</style>