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
        <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Name" required></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          v-model="department"
          :rules="departmentRules"
          label="your Department"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-select
          v-model="select"
          :items="items"
          :rules="departmentRules"
          label="Item"
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
  </v-container>
</template>


<script>
export default {
  name: "DestinationInformation",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],

    department: "",
    departmentRules: [(v) => !!v || "Your Department is required"],

    items: ["上司，目上の人", "身内", "友達"],
    selectRules: [],
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.department = "";
      this.tel = "";
      this.email = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped>
</style>