<template>
  <v-card max-width="1000" class="mx-auto">
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="5"></v-col>
        <v-col cols="2">
          <p>SuperiorResult</p>
        </v-col>
        <v-col cols="5"></v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-title class="headline">テンプレート文</v-card-title>
            <v-card-subtitle>ここに文章</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-expansion-panels inset>
            <v-expansion-panel>
              <v-expansion-panel-header>会社説明会の連絡のお礼</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />説明会の日程承知いたしました
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br>説明会の日程をご連絡いただき、ありがとうございます。
                  <br />xx月 xx日 xx時 に、必要書類持参の上お伺いいたします。
                  <br />当日は、お話を伺うのを楽しみにしております。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>会社説明会のお礼</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />xx月 xx日 会社説明会参加のお礼
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br />貴社の会社説明会に参加させていただき、誠にありがとうございました。
                  <br />具体的な業務内容についてお話を伺い、貴社で働きたいという思いが一層強くなりました。
                  <br />質問にも丁寧に答えていただき、感謝しております。
                  <br />頂いた資料を熟読し、貴社への理解をさらに深めたいと思います。
                  <br />今後もどうぞよろしくお願いいたします。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>選考通過の連絡のお礼</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />選考結果のご連絡ありがとうございました
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br />このたびは、書類選考通過のお知らせをいただきまして、誠にありがとうございました。
                  <br />また、面接に臨ませていただけるとのこと、重ねて御礼申し上げます。
                  <br />ご指定の xx月 xx日 にお伺いいたします。どうぞよろしくお願いいたします。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>インターンのお礼</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />インターンシッププログラム参加のお礼
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br />このたびは xx日間 にわたり大変貴重な体験をさせて頂き、ありがとうございました。
                  <br />何もかも初めてのことばかりで緊張していた私を大変温かく迎えていただき、
                  <br />時に厳しく指導して下さいましたこと、とても感謝しています。
                  <br />実際に業務の一端を経験してみると、頭の中で想像していたものとは異なり、
                  <br />円滑なコミュニケーションに心を配りながら、自身の目標を明確にし、
                  <br />確実に課題をクリアにして達成していくことの大切さを実感しました。
                  <br />また、業務内容について実際に就業している方々から、具体的なお話を伺う機会にも恵まれ、
                  <br />進路を選択する上で大変有益な体験をさせて頂きました。
                  <br />インターンシップを終えた今、改めて貴社の一員として働かせて頂きたいという思いを強くいたしました。
                  <br />業務多忙の中で、貴重な体験をさせて頂いたこと、重ねてお礼申し上げます。
                  <br />
                  <br />末筆ながら貴社のご発展と皆様のご健勝をお祈り申し上げます。
                  <br />今後ともどうぞよろしくお願いいたします。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>日程調整の返信</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />面接の日程について承知いたしました
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br />この度は面接の日程候補をご連絡いただき、誠にありがとうございます。
                  <br />＞＞ xx月 xx日（x）xx時
                  <br />上記の日時や場所、委細承知いたしました。
                  <br />xx月 xx日（x）xx時に、貴社にお伺いさせていただきます。
                  <br />
                  <br />お忙しい中、お時間をいただけて大変嬉しく思います。
                  <br />当日はどうぞよろしくお願いいたします。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>日程変更のお願い</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />面接日程変更のお願い
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br />本日は、面接の日程を変更していただきたく、ご連絡いたしました。
                  <br />xx月 xx日 に、大学のゼミでの発表が重なり、
                  <br />お約束の時間にお伺いすることが難しくなってしまいました。
                  <br />私のスケジュール管理不足にもかかわらず、勝手なお願いで申し訳ありませんが、
                  <br />もし可能でしたら、別の日程で面接を受けさせていただけないでしょうか。
                  <br />
                  <br />お手数をおかけしまして、大変申し訳ございません。
                  <br />何卒、よろしくお願い申し上げます。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>キャンセルの謝罪</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />面接キャンセルのお詫び
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br />xx月 xx日 xx時 から、面接にお伺いするお約束をさせていただきましたが、
                  <br />定刻にお伺いすることができなくなってしまいました。
                  <br />xx様 には大変申し訳ございませんが
                  <br />面接日時を再設定していただくことは可能でしょうか。
                  <br />お忙しいところ、大変恐縮ではございますが、
                  <br />何卒よろしくお願いいたします。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>面接のお礼</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />本日は面接ありがとうございました
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br />本日はご面談のお時間をいただき、誠にありがとうございました。
                  <br />xx様 のお話を伺う中で、特に xxxx が印象的でした。
                  <br />以前より貴社を第一志望としておりましたが、貴社で仕事をしたいという気持ちを
                  <br />ますます強くいたしました。
                  <br />
                  <br />末筆ながら、重ねて面接のお礼を申し上げるとともに、貴社のご発展と皆様のご健勝をお祈り申し上げます。
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>内定のお礼</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  -- 件名 --
                  <br />採用内定連絡ありがとうございました
                </p>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <p>
                  -- 本文 --
                  <br />このたびの内定のご連絡、大変嬉しく思います。
                  <br />お忙しい中、選考の機会をいただき本当にありがとうございました。
                  <br />一日も早く、貴社の戦力として活躍できるよう精一杯頑張ります。
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
export default {
  name: "SuperiorResult",
  data: () => ({}),

  methods: {},
};
</script>

<style scoped>
</style>