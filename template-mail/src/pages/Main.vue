<template>
    <v-app>
        <v-container>
            <v-layout justify-center mt-10>
                <div>
                    <h2>Main.vue</h2>
                    <p>親コンポーネントのnumberの値({{ number }})</p>
                    <p>objectsの値</p>
                    <ul>
                        <template v-for="value in objects">
                            <li :key="value">
                                {{ value }}
                            </li>
                        </template>
                    </ul>
                    <!-----③これよりProps------>
                    <props :number="number" :objects="objects"></props>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
  // ①
  import Props from './Props';

  export default {
    name: 'Main',
    // ②
    components: {
      Props
    },
    data() {
      return {
        number: 1,
        objects: {
          id: 1,
          number: 10,
          name: '山田太郎'
        }
      };
    }
  };
</script>