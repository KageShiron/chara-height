<template>
    <div id="chart-data" class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-color--primary mdl-color-text--primary-contrast ">
            <h2 class="mdl-card__title-text">平均と標準偏差</h2>
        </div>
        <div class="card-content">
            データの調整が可能です。
            <ul>
                <li>寒冷な地域では身長が高めな傾向</li>
                <li>栄養摂取が不十分だと身長が低めな傾向</li>
            </ul>
            平均身長(cm):<br>
            <div class="flex">
                <mdl-button class="mdl-button--raised" @click.native="changeAverage(-10)">-10</mdl-button>
                <mdl-button class="mdl-button--raised" @click.native="changeAverage(-5)">-5</mdl-button>
                <mdl-button class="mdl-button--raised" @click.native="changeAverage(-1)">-1</mdl-button>
                <mdl-textfield type="number" min="0" v-model="value.average" />
                <mdl-button class="mdl-button--raised" @click.native="changeAverage(+1)">+1</mdl-button>
                <mdl-button class="mdl-button--raised" @click.native="changeAverage(+5)">+5</mdl-button>
                <mdl-button class="mdl-button--raised" @click.native="changeAverage(+10)">+10</mdl-button>
            </div>
            <br> 標準偏差(cm): <span style="font-size:12px;color:#333;">データの散らばり具合</span><br>
            <div class="flex">
                <mdl-button class="mdl-button--raised" @click.native="changeStddev(-5)">-5</mdl-button>
                <mdl-button class="mdl-button--raised" @click.native="changeStddev(-1)">-1</mdl-button>
                <mdl-button class="mdl-button--raised" @click.native="changeStddev(-0.1)">-0.1</mdl-button>
                <mdl-textfield type="number" min="0" v-model="value.stddev" />
                <mdl-button class="mdl-button--raised" @click.native="changeStddev(+0.1)">+0.1</mdl-button>
                <mdl-button class="mdl-button--raised" @click.native="changeStddev(+1)">+1</mdl-button>
                <mdl-button class="mdl-button--raised" @click.native="changeStddev(+5)">+5</mdl-button>
            </div>
            <br>
            正規分布 [縦:確率(%) 横:身長(cm)]:
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
            changeAverage(val) { this.value.average = Math.round((this.value.average + val) * 100) / 100; },
            changeStddev(val) { this.value.stddev = Math.round((this.value.stddev + val) * 100) / 100; },
        },
        components: { "chart": Chart }
    }


</script>

<style lang="scss">
#chart-data{
    .mdl-textfield{
        width:60px !important;
        flex-shrink:0;
    }
    .mdl-button{
        padding:0;
    }


    .flex{
        display:flex;
        align-items: center;

        .mdl-button--raised{
            flex-grow:1;
            margin:0 3px;
            min-width:auto;
        }

        .mdl-textfield{
            padding:0;
            
        }
    }
}
</style>