<template>
  <v-card max-width="1000" class="mx-auto">
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="5"></v-col>
        <v-col cols="2">
          <p>RelativeResult</p>
        </v-col>
        <v-col cols="5"></v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-title class="headline">テンプレート文</v-card-title>
            <v-card-subtitle><Template_friend /></v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-expansion-panels inset>
            <v-expansion-panel>
              <v-expansion-panel-header>いつでも使える挨拶文</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  <br>・こんにちは
                  <br>・お元気ですか？
                  <br>・お久しぶりです
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>久しぶり挨拶文</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  <br>・久しぶり！仕事忙しそうだけど、元気にしてる？
                  <br>・久しぶりだね！前に xxxx って言ってたけどその後大丈夫？
                  <br>・お久しぶり！こっちは xxxx だけど、そっちはどう？
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>返信用挨拶文</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  <br>・メールくれてありがとう。
                  <br>・忙しいなか返信くれてありがとう。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>問いかけ対応用文</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  <br>・そうなんだ、 xxxx について気になってたから安心したよ。
                  <br>・元気そうで何よりだよ。前に xxxx って言ってたから気になって連絡してみたんだ。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>結びの言葉</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  <br>・それでは、またね
                  <br>・お返事待ってます
                  <br>・お体に気をつけて、また会うことを楽しみにしています。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
import Template_friend from "../components/Template_friend";

export default {
  components: {Template_friend},
  name: "RelativeResult",
  data: () => ({}),

  methods: {},
};
</script>

<style scoped>
</style>