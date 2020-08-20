<template>
    <v-container class="grey lighten-5">

        <v-row id="center">
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
            <v-col cols="12" sm="8" md="8" lg="8">
                <p>相手の情報</p>
            </v-col>
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field v-model="items.name" :counter="20" :rules="nameRules" label="Name"
                              required></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field
                        v-model="items.department"
                        :rules="departmentRules"
                        label="your Department"
                        required
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-select
                        v-model="items.select"
                        :items="items_select"
                        :rules="departmentRules"
                        label="関係"
                        required
                        @change="$v.select.$touch()"
                        @blur="$v.select.$touch()"
                ></v-select>
            </v-col>
        </v-row>

        <v-row justify="center" align-content="center">
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
            <v-col cols="6" sm="2" md="2" lg="2">
                <v-btn class="mr-4" @click="submit">submit</v-btn>
            </v-col>
            <v-col cols="6" sm="2" md="2" lg="2">
                <v-btn @click="clear">clear</v-btn>
            </v-col>
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
        </v-row>

    </v-container>
</template>


<script>
  export default {
    name: "DestinationInformation",
    data: () => ({
      valid: true,

      items: {
        name: "",
        department: "",
        select: "",
      },

      // name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],

      departmentRules: [(v) => !!v || "Your Department is required"],

      items_select: ["上司，目上の人", "身内", "友達"],
      selectRules: [],
    }),

    methods: {
      submit() {
        this.$store.commit('DestinationUpdata', this.items);
        this.$store.commit('destinationFlag');
        this.$store.commit('pagesFlag', 1);
        this.$refs.observer.validate();

      },
      clear() {
        this.items = "";
        this.$refs.observer.reset();
      },
    },


    computed: {
      My() {
        return this.$store.getters['My']
      },

      Destination() {
        return this.$store.getters['Destination']
      },

      destinationFlag() {
        return this.$store.getters['destinationFlag']
      },

      pagesFlag() {
        return this.$store.getters['pagesFlag']
      },
    },
  };
</script>

<style scoped>
    #center {
        text-align: center;
    }
</style>