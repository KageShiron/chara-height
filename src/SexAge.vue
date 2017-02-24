<template>
    <div id="sex-age" class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-color--primary mdl-color-text--primary-contrast ">
            <h2 class="mdl-card__title-text">統計データ読み込み</h2>
        </div>
        <div class="card-content">
            <div class="text">
                日本(平成27)の統計データからデータを読み込みます。4月1日地点の年齢及び身長です。
            </div>
            <div class="flex">
                <div>
                    <div class="form-label mdl-color-text--primary">性別</div>
                    <mdl-radio v-model="sex" val="1">男</mdl-radio>
                    <mdl-radio v-model="sex" val="2">女</mdl-radio>
                </div>
                <div>
                    <div class="form-label mdl-color-text--primary">年齢</div>
                    <select v-model="age" id="age-select" class="mdl-textfield__input">
                        <option value="0">--- 年齢(学年) ---</option>
                        <option value="5">5歳 (幼稚園)</option>
                        <option value="6">6歳 (小1)</option>
                        <option value="7">7歳 (小2)</option>
                        <option value="8">8歳 (小3)</option>
                        <option value="9">9歳 (小4)</option>
                        <option value="10">10歳(小5)</option>
                        <option value="11">11歳(小6)</option>
                        <option value="12">12歳(中1)</option>
                        <option value="13">13歳(中2)</option>
                        <option value="14">14歳(中3)</option>
                        <option value="15">15歳(高1)</option>
                        <option value="16">16歳(高2)</option>
                        <option value="17">17歳(高3)</option>
                        <option value="20">18歳～29歳</option>
                        <option value="30">30歳～59歳</option>
                        <option value="60">60歳～70歳</option>
                        <option value="70">70歳～80歳</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="apply">
      統計データを反映
    </a>
        </div>
    </div>
</template>

<script>

    const toukei = [{}, {
        5: { "average": 110.4, "stddev": 4.71 },
        6: { "average": 116.5, "stddev": 4.87 },
        7: { "average": 122.5, "stddev": 5.19 },
        8: { "average": 128.1, "stddev": 5.41 },
        9: { "average": 133.5, "stddev": 5.63 },
        10: { "average": 138.9, "stddev": 6.16 },
        11: { "average": 145.2, "stddev": 7.08 },
        12: { "average": 152.6, "stddev": 8.04 },
        13: { "average": 159.8, "stddev": 7.68 },
        14: { "average": 165.1, "stddev": 6.69 },
        15: { "average": 168.3, "stddev": 5.96 },
        16: { "average": 169.8, "stddev": 5.82 },
        17: { "average": 170.7, "stddev": 5.78 },
        20: { "average": 172.2, "stddev": 6.1 },
        30: { "average": 170.6, "stddev": 5.7 },
        60: { "average": 166.1, "stddev": 6.1 },
        70: { "average": 161.9, "stddev": 6.3 }



    }
        , {
        5: { "average": 109.4, "stddev": 4.66 },
        6: { "average": 115.5, "stddev": 4.83 },
        7: { "average": 121.5, "stddev": 5.13 },
        8: { "average": 127.3, "stddev": 5.50 },
        9: { "average": 133.4, "stddev": 6.14 },
        10: { "average": 140.1, "stddev": 6.77 },
        11: { "average": 146.7, "stddev": 6.63 },
        12: { "average": 151.8, "stddev": 5.90 },
        13: { "average": 154.9, "stddev": 5.44 },
        14: { "average": 156.5, "stddev": 5.30 },
        15: { "average": 157.1, "stddev": 5.29 },
        16: { "average": 157.6, "stddev": 5.32 },
        17: { "average": 157.9, "stddev": 5.38 },
        20: { "average": 157.6, "stddev": 5.1 },
        30: { "average": 157.5, "stddev": 5.2 },
        60: { "average": 153.2, "stddev": 5.4 },
        70: { "average": 148.3, "stddev": 6.2 },	

    }

    ]
    export default {
        name: 'sex-age',
        data() { return { sex: 1, age: 20 } },
        methods: {
            apply: function () {
                const v = toukei[this.sex][this.age];
                this.$emit("apply", { average: v.average, stddev: v.stddev });
            }
        }
    }
</script>

<style lang="scss">

#sex-age{

.form-label {
    float: left;
    color: #666;
    font-size: small;
    margin-right: 10px;
    float:none;
    margin-bottom:-10px;
}
select{
    width:auto !important;
}


.text
{
    font-size:small;
    margin-bottom:1em;
}

.flex{
    display:flex;

    >div:first-child{
        margin-right:20px;
    }
}

.mdl-radio{
    margin-top:5px;
    padding-right:15px;
}

}

</style>