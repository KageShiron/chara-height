<template>
    <div id="sex-age">
        <h2>Chart</h2>
        <canvas id="myChart"></canvas>
    </div>
    </div>
</template>

<script>
    import Chart from "chart.js";
    let chart;
    export default {
        name: 'chart',
        data() {
            return {
            }
        },
        props:{
            average : Number,
            stddev : Number
        },
        mounted() {
            var ctx = document.getElementById('myChart').getContext('2d');
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: '身長',
                        data: generatedataPoints(this.stddev, this.average),
                        borderColor: "#99F",
                        backgroundColor: "rgba(200,200,255,0.5)"
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom'
                        }]
                    }
                }
            });
        },
        updated() {
            chart.datasets[0].data = generatedataPoints(this.stddev, this.average)
        }
    }
    // 正規分布の確率密度関数
    const root2pi = 2.50662827463;
    function pdfunc(x, sigma, mu) {
        return Math.exp(-(x - mu) * (x - mu) / (2 * sigma * sigma)) / (root2pi * sigma)
    }

    function generatedataPoints(sigma, mu) {
        let ary = [];
        const min = mu - 4 * sigma;
        const max = mu + 4 * sigma;

        for (let i = Math.floor(min); i < max; i++) {
            ary.push({ "x": (i), "y": 100 * pdfunc(i, sigma, mu) });
        }
        return ary;
    }



</script>

<style lang="scss">
</style>