<template>
    <v-app>
        <v-container>
            <div>
                <h2>Props.vue</h2>
                <p>子コンポーネントに渡された値:({{ number }})</p>
                <ul>
                    <li v-for="(value, key) in objects" :key="value">
                        {{ key }}-{{ value }}
                    </li>
                </ul>
            </div>
        </v-container>
    </v-app>
</template>
<script>
  export default {
    name: 'Props',
    props: ['number', 'objects']
  };
</script>