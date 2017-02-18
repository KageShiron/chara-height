<template>
    <div id="sex-age">
        <h2>生物学的性別</h2>
        <form>
            <input id="male" type="radio" />
            <label for="male">男</label>
            <input id="female" type="radio" />
            <label for="female">女</label>
        </form>
        <h2>年齢(学年)</h2><br> 4/1地点の年齢
        <br>
        <select>
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
        <input type="button" value="反映" />
    </div>
</template>

<script>
    export default {
        name: 'sex-age',
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
</style>