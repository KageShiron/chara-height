<template>
  <div id="app">
    <sex-age @apply="apply" />
    <chart-data v-model="chartData" />
    <generate :average="chartData.average" :stddev="chartData.stddev" />
  </div>
</template>

    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">免責/出典</h2>
      </div>
      <div class="card-content">
        これはTRPGや創作においてそれっぽい身長を生成するためのツールです。<br>
        統計や生物学的に適切な情報を示すものではなく、自己責任でご利用ください。<br>
        正規分布に関しては±3.5σ程度の正規分布表を適当に参照してるだけです。<br>
        ちくしょう、俺の身長は平均に達してなかった。誰も俺を
        <ul>
          <li><a href="http://www.e-stat.go.jp/SG1/estat/GL08020103.do?_toGL08020103_&listID=000001151595&requestSender=dsearch">国民健康・栄養調査 平成２６年国民健康・栄養調査 年次 2014年</a> 18以上の身長、標準偏差</li>
          <li><a href="http://www.e-stat.go.jp/SG1/estat/List.do?bid=000001070659&cycode=0">学校保健統計調査 平成２７年度 全国表 </a> 17歳以下の身長、標準偏差</li>
      </div>
    </div>
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