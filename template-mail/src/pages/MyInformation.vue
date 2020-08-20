<template>
    <v-container class="grey lighten-5">

        <v-row id="center">
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
            <v-col  cols="12" sm="8" md="8" lg="8">
                <p>自分の情報</p>
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
                <v-text-field v-model="items.tel" :rules="telRules" label="Tel" required></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field v-model="items.email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
        </v-row>

        <v-row justify="center" align-content="center" id="center">
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
            <v-col cols="6" sm="2" md="2" lg="2">
                <v-btn class="mr-4" @click="submit">submit</v-btn>
            </v-col>
            <v-col cols="6" sm="2" md="2" lg="2">
                <v-btn @click="clear">clear</v-btn>
            </v-col>
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
        </v-row>

        <v-row>
            <v-col>
                <div>
                    <p>{{My.name}}</p>
                    <p>{{My.department}}</p>
                    <p>{{My.email}}</p>
                    <p>{{My.tel}}</p>


                    <!--<p>{{Destination.name}}</p>-->

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

  export default {
    name: "MyInformation",
    data: () => ({
      valid: true,

      items: {
        name: "",
        department: "",
        tel: "",
        email: "",
      },

      // name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],

      // department: "",
      departmentRules: [(v) => !!v || "Your Department is required"],

      // tel: "",
      telRules: [(v) => !!v || "Tel number is required"],

      // email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    }),


    methods: {
      submit() {
        this.$store.commit('MyUpdata', this.items);
        // this.$store.commit('flagUpdata', 2);
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
    #center {
        text-align: center;
    }
</style>