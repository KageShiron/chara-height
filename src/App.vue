<template>
  <div id="app">
    <sex-age @apply="apply" />
    <chart-data v-model="chartData"/>
    <generate />
  </div>
</template>

<script>
  import SexAge from "./SexAge.vue";
  import ChartData from "./ChartData.vue";
  import Generate from "./Generate.vue";

  export default {
    name: 'app',
    data() {
      return {
        sex: 0,
        age: 0,
        chartData : { average : 0,stddev:0 }
      }
    },
    methods: {
      apply: function (args) {
        this.chartData = args;
      }
    },
    components: { "sex-age": SexAge, "chart-data": ChartData ,"generate" : Generate}
  }


</script>

<style lang="scss">
.card-content{
  margin:10px;
}
.mdl-card{
  margin:10px;
  width:auto;
}
</style>