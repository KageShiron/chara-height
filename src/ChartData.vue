<template>
    <div id="char-data">
        平均身長(cm):<br>
        <input type="button" value="-10cm" />
        <input type="button" value="-5cm"/>
        <input type="button" value="-1cm"/>
        <input type="text" :value="average" />
        <input type="button" value="+1cm" />
        <input type="button" value="+5cm"/>
        <input type="button" value="+10cm"/>
        <br>
        標準偏差(cm):<br>
        <input type="button" value="-10cm" />
        <input type="button" value="-5cm"/>
        <input type="button" value="-1cm"/>
        <input type="text" :value="stddev" />
        <input type="button" value="+1cm" />
        <input type="button" value="+5cm"/>
        <input type="button" value="+10cm"/>
    </div>
</template>

<script>
    export default {
        name: 'chart',
        props:
        {
            average : Number,
            stddev : Number
        }   
         }


</script>

<style lang="scss">
</style>