<template>
    <div class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">統計データ読み込み</h2>
        </div>
        <div class="card-content">
            <p>
                日本(平成27)の統計データからデータを読み込みます。年齢はその学年の4月1日であり、測定日も4月周辺です。
            </p>
            <div class="form-label">性別</div>
            <mdl-radio v-model="sex" val="1">男</mdl-radio>
            <mdl-radio v-model="sex" val="2">女</mdl-radio>
            <br>
            <div class="form-label" style="line-height: 28px">年齢</div>
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
            </select>
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      反映
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
    }

    ]
    export default {
        name: 'sex-age',
        data() { return { sex: 1, age: 0 } },
        methods: {
            apply: function () {
                const v = toukei[this.sex][this.age];
                this.$emit("apply", { average: v.average, stddev: v.stddev });
            }
        }
    }
</script>

<style lang="scss">
.form-label {
    float: left;
    color: #666;
    font-size: small;
    line-height: 24px;
    margin-right: 10px;
}
select{
    width:auto !important;
}
</style>