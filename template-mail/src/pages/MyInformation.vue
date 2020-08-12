<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="5"></v-col>
      <v-col cols="2">
        <p>MyInformation</p>
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
        <v-text-field v-model="tel" :rules="telRules" label="Tel" required></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
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
  name: "MyInformation",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],

    department: "",
    departmentRules: [(v) => !!v || "Your Department is required"],

    tel: "",
    telRules: [(v) => !!v || "Tel number is required"],

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
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