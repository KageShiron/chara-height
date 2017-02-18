<template>
  <div id="app">
    <sex-age @apply="apply" />
    <chart-data :average="150" :stddev="8.0" />
    <chart :average="150" :stddev="8.0" />
  </div>
</template>

<script>
  import SexAge from "./SexAge.vue";
  import Chart from "./Chart.vue";
  import ChartData from "./ChartData.vue";

  export default {
    name: 'app',
    data() {
      return {
        sex: 0,
        age: 0,
        average: 0,
        stddev: 0
      }
    },
    methods: {
      apply: function (args) {
        this.average = args.average;
        this.stddev = args.stddev;
      }
    },
    components: { "sex-age": SexAge, "chart": Chart, "chart-data": ChartData }
  }


</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>