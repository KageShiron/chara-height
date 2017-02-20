<template>
    <div id="chart-data" class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">平均と標準偏差</h2>
        </div>
        <div class="card-content">
        平均身長(cm):<br>   
        <mdl-button class="mdl-button--raised" @click.native="changeAverage(-10)">-10</mdl-button>
        <mdl-button class="mdl-button--raised" @click.native="changeAverage(-5)">-5</mdl-button>
        <mdl-button class="mdl-button--raised" @click.native="changeAverage(-1)">-1</mdl-button>
        <mdl-textfield type="number" min="0" v-model="value.average" />
        <mdl-button class="mdl-button--raised" @click.native="changeAverage(+1)">+1</mdl-button>
        <mdl-button class="mdl-button--raised" @click.native="changeAverage(+5)">+5</mdl-button>
        <mdl-button class="mdl-button--raised" @click.native="changeAverage(+10)">+10</mdl-button>
        <br> 標準偏差(cm):<br>
        <mdl-button class="mdl-button--raised" @click.native="changeStddev(-10)">-10</mdl-button>
        <mdl-button class="mdl-button--raised" @click.native="changeStddev(-5)">-5</mdl-button>
        <mdl-button class="mdl-button--raised" @click.native="changeStddev(-1)">-1</mdl-button>
        <mdl-textfield type="number" min="0" v-model="value.stddev" />
        <mdl-button class="mdl-button--raised" @click.native="changeStddev(+1)">+1</mdl-button>
        <mdl-button class="mdl-button--raised" @click.native="changeStddev(+5)">+5</mdl-button>
        <mdl-button class="mdl-button--raised" @click.native="changeStddev(+10)">+10</mdl-button>
        <br>
        確率分布:
        <chart :average="value.average" :stddev="value.stddev" />
    </div>
</template>

<script>
import Chart from "./Chart.vue"
    export default {
        name: 'chartdata',
        props: ["value"],/*
        {
            charData : {average: Number,
            stddev: Number}
        },*/
        methods: {
            changeAverage(val) { this.value.average = Math.round((this.value.average + val) * 10) / 10; },
            changeStddev(val) { this.value.stddev = Math.round((this.value.stddev + val) * 10) / 10; },
        },
        components: { "chart":Chart}
    }


</script>

<style lang="scss">
#chart-data .mdl-textfield
{
    width:auto !important;
}
</style>