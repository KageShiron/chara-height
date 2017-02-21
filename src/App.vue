<template>
  <div id="app">
    <sex-age @apply="apply" />
    <chart-data v-model="chartData" />
    <generate :average="chartData.average" :stddev="chartData.stddev" />
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
        chartData: { average: 0, stddev: 0 }
      }
    },
    methods: {
      apply: function (args) {
        this.chartData = args;
      }
    },
    components: { "sex-age": SexAge, "chart-data": ChartData, "generate": Generate }
  }


</script>

<style lang="scss">
.card-content{
  padding:10px;
}
.mdl-card{
  margin:10px 0px;
  width:calc(100% - 20px);
  margin:10px;
  break-inside:avoid;
  
  .mdl-card__title{
      padding:0.5em 1em;
      font-size:18px;
    }
}

#app{
  -ms-grid-column: 2;
  -moz-column-count: 2;
  -webkit-column-count:2;
  column-count:2;
  column-gap:0;
}
ul{
  padding-left:1em;
}

@media screen and (max-width: 480px) {
  .mdl-card{
    margin:10px 0;

  }
  #app{
  -ms-grid-column: 1;
  -moz-column-count:1;
  -webkit-column-count:1;
  column-count:1;
  }
}

</style>