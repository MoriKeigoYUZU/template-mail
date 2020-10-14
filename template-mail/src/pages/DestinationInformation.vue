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
                <v-text-field v-model="items.name" :counter="20" :rules="nameRules" label="相手の名前"
                              required></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field
                        v-model="items.department"
                        :rules="departmentRules"
                        label="相手の所属"
                        required
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-select
                        v-model="items.select"
                        :items="items_select"
                        :rules="relationRules"
                        label="あなたとの関係"
                        required
                        @change="$v.select.$touch()"
                        @blur="$v.select.$touch()"
                ></v-select>
            </v-col>
        </v-row>

        <v-row justify="center" align-content="center" id="center">
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
            <v-col cols="6" sm="2" md="2" lg="2">
                <v-btn class="mr-4" @click="submit">登録</v-btn>
            </v-col>
            <v-col cols="6" sm="2" md="2" lg="2">
                <v-btn @click="clear">取り消し</v-btn>
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
        (v) => !!v || "名前を入力してください",
        (v) => (v && v.length <= 20) || "名前は20文字未満である必要があります",
      ],

      departmentRules: [(v) => !!v || "所属を入力してください"],

      items_select: ["上司，目上の人", "身内", "友達"],
      relationRules: [(v) => !!v || "関係を選択してください"],
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