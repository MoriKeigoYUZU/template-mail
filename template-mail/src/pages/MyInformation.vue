<template>
    <v-container class="grey lighten-5">

        <v-row id="center">
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
            <v-col cols="12" sm="8" md="8" lg="8">
                <p>自分の情報</p>
            </v-col>
            <v-col cols="0" sm="2" md="2" lg="2"></v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field v-model="items.name" :counter="20" :rules="nameRules" label="あなたの名前"
                              required></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field
                        v-model="items.department"
                        :rules="departmentRules"
                        label="あなたの所属"
                        required
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field v-model="items.tel" :rules="telRules" label="あなたの電話番号" required></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field v-model="items.email" :rules="emailRules" label="あなたのメールアドレス" required></v-text-field>
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
        (v) => !!v || "名前を入力してください",
        (v) => (v && v.length <= 20) || "名前は20文字未満である必要があります",
      ],

      // department: "",
      departmentRules: [(v) => !!v || "所属を入力してください"],

      // tel: "",
      telRules: [(v) => !!v || "電話番号を入力してください"],

      // email: "",
      emailRules: [
        (v) => !!v || "メールアドレスを正しく入力してください",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    }),


    methods: {
      submit() {
        this.$store.commit('MyUpdata', this.items);
        this.$store.commit('myFlag');
        this.$store.commit('pagesFlag', 2);
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

      myFlag() {
        return this.$store.getters['myFlag']
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