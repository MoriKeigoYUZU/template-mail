<template>
    <v-container class="grey lighten-5">
        <v-row>
            <v-col cols="5"></v-col>
            <v-col cols="2">
                <p>DestinationInformation</p>
            </v-col>
            <v-col cols="5"></v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field v-model="items.name" :counter="20" :rules="nameRules" label="Name" required></v-text-field>
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
            <v-col cols="4"></v-col>
            <v-col cols="2">
                <v-btn class="mr-4" @click="submit">submit</v-btn>
            </v-col>
            <v-col cols="2">
                <v-btn @click="clear">clear</v-btn>
            </v-col>
            <v-col cols="4"></v-col>
        </v-row>


        <v-row>
            <v-col>
                <p>{{Destination.name}}</p>
                <p>{{Destination.department}}</p>
                <p>{{Destination.select}}</p>
            </v-col>
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

      // department: "",
      departmentRules: [(v) => !!v || "Your Department is required"],

      items_select: ["上司，目上の人", "身内", "友達"],
      // select: "",
      selectRules: [],
    }),

    methods: {
      submit() {
        this.$store.commit('DestinationUpdata', this.items);
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


      counter() {
        return this.$store.getters['counter']
      },

      Destination() {
        return this.$store.getters['Destination']
      }

    },
  };
</script>

<style scoped>
</style>