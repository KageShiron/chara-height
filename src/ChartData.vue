<template>
    <div id="char-data">
        平均身長(cm):<br>
        <input type="button" @click="changeAverage(-10)" value="-10cm" />
        <input type="button" @click="changeAverage(-5)" value="-5cm" />
        <input type="button" @click="changeAverage(-1)" value="-1cm" />
        <input type="text" v-model="value.average" />
        <input type="button" @click="changeAverage(+1)" value="+1cm" />
        <input type="button" @click="changeAverage(+5)" value="+5cm" />
        <input type="button" @click="changeAverage(+10)" value="+10cm" />
        <br> 標準偏差(cm):
        <br>
        <input type="button" @click="changeStddev(-10)" value="-10cm" />
        <input type="button" @click="changeStddev(-5)" value="-5cm" />
        <input type="button" @click="changeStddev(-1)" value="-1cm" />
        <input type="text" v-model="value.stddev" />
        <input type="button" @click="changeStddev(+1)" value="+1cm" />
        <input type="button" @click="changeStddev(+5)" value="+5cm" />
        <input type="button" @click="changeStddev(+10)" value="+10cm" />
    </div>
</template>

<script>
    export default {
        name: 'chart',
        props: ["value"] ,/*
        {
            charData : {average: Number,
            stddev: Number}
        },*/
        methods: {
            changeAverage(val) {this.value.average = Math.round((parseFloat(this.value.average) + val) * 10) / 10; },
            changeStddev(val) { this.value.stddev =  Math.round((parseFloat(this.value.stddev) + val) * 10) / 10; },
        }
    }


</script>

<style lang="scss">
</style>