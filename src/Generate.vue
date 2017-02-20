<template>
    <div id="generate" class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">ランダム作成</h2>
        </div>
        <div class="card-content">
            上記のグラフの正規分布に従ってランダムな身長を生成します。<br>
            
            <mdl-textfield floating-label="下限確率" type="number" v-model="min" />% ～
            <mdl-textfield　floating-label="上限確率" type="number" v-model="max" />%
            <mdl-button class="mdl-button--raised">作成</mdl-button><br>
            <h3>プリセット</h3>
            <mdl-button class="mdl-button--raised">0%～100%</mdl-button>
            <mdl-button class="mdl-button--raised">2%～98%</mdl-button>まんべんなく<br>
            <mdl-button class="mdl-button--raised">0%～50%</mdl-button>
            <mdl-button class="mdl-button--raised">2%～50%</mdl-button>平均以下<br>
            <mdl-button class="mdl-button--raised">50%～100%</mdl-button>
            <mdl-button class="mdl-button--raised">50%～98%</mdl-button>平均以上<br>
            <mdl-button class="mdl-button--raised mini">①</mdl-button>
            <mdl-button class="mdl-button--raised mini">②</mdl-button>
            <mdl-button class="mdl-button--raised mini">③</mdl-button>
            <mdl-button class="mdl-button--raised mini">④</mdl-button>
            <mdl-button class="mdl-button--raised mini">⑤</mdl-button>
            <mdl-button class="mdl-button--raised mini">⑥</mdl-button>
            6分割
        </div>
    </div>
</template>

<script>
    export default {
        name: 'generate',
        props : {
            
        },
        data() { return {
            min : { type : Number , default : 0},
            max : { type : Number , default : 100}
        }}
    }


</script>

<style lang="scss">
#generate
{
    .mdl-textfield
    {
        width:auto !important;
    }
    .mdl-button
    {
        margin:5px;
        width:150px;
    }
    .mini
    {
        width:50px;    
    }
    h3
    {
        font-size:18px;
        margin-top:0;
        margin-bottom:0;
    }
}

</style>