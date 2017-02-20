<template>
    <div id="sex-age">
        <div style="display:none">{{average}} {{stddev}}</div>
<canvas id="myChart"></canvas>
</div>
</div>
</template>

<script>
    import Chart from "chart.js";
    var chart;
    export default {
        name: 'chart',
        data() {
            return {
            }
        },
        props: {
            average: Number,
            stddev: Number
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
                    legend : {display:false},
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMax: 7,
                                min: 0,
                            }
                        }],
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom'
                        }]
                    }
                }
            });
        },
        updated() {
            chart.data.datasets[0].data = generatedataPoints(this.stddev, this.average)
            chart.update();
        }
    }
    // 正規分布の確率密度関数
    const root2pi = 2.50662827463;
    function pdfunc(x, sigma, mu) {
        return Math.exp(-(x - mu) * (x - mu) / (2 * sigma * sigma)) / (root2pi * sigma)
    }

    function generatedataPoints(sigma, mu) {
        let ary = [];

        let min = mu - 4 * sigma < 80 ? mu - 4 * sigma : 80;
        const max = mu + 4 * sigma > 200 ? mu + 4 * sigma : 200;

        if (min < 0) min = 0;
        const step = (max - min > 200) ? ((max - min) / 100) : 1;

        for (let i = min; i < max; i += step) {
            ary.push({ "x": (i), "y": 100 * pdfunc(i, sigma, mu) });
        }
        return ary;
    }



</script>

<style lang="scss">
</style>