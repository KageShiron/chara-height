<template>
    <div id="sex-age">
        <h2>生物学的性別</h2>
        <form>
            <input id="male" type="radio" name="sex" value="1" v-model="sex" />
            <label for="male">男</label>
            <input id="female" type="radio" name="sex" value="2" v-model="sex" />
            <label for="female">女</label>
        </form>
        <h2>年齢(学年)</h2><br> 4/1地点の年齢
        <br>
        <select v-model="age">
            <option value="0">--選択--</option>
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
        <input type="button" value="反映" @click="apply" />
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
</style>