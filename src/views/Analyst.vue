<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Analyst</h2>
        </div>

        <hr class="my-1" />

        <AnalystDoughnutChart :chartdata="chartData" :options="chartOptions"/>

        <div class="row">
            <div class="col">
                <p>
                    Occaecat ubi appellat. Quorum ullamco ingeniis, an labore incididunt aut probant
                    despicationes do ullamco aut id o arbitrantur. Culpa aliquip commodo, eram
                    firmissimum iudicem elit excepteur, labore laboris ita firmissimum id amet hic
                    arbitror. Fugiat philosophari nostrud ipsum voluptate an iudicem eruditionem ubi
                    incurreret, legam probant iis sempiternum si quo legam ubi dolore, an tempor
                    velit aliqua iudicem, e quo aute possumus hic nostrud id vidisse, senserit illum
                    deserunt.
                </p>
            </div>
        </div>
    </main>
</template>

<script>
/* Import components. */
import AnalystDoughnutChart from '@/components/AnalystDoughnutChart'

export default {
    components: {
        AnalystDoughnutChart,
    },
    data: () => {
        return {
            // chartData: {
            //     labels: ['January', 'February'],
            //     datasets: [{
            //         label: 'Data One',
            //         backgroundColor: '#f87979',
            //         data: [40, 20]
            //     }]
            // },
            chartData: {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: ['red', 'yellow', 'blue'],
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    created: function () {

    },
    mounted: function () {
        // this.renderChart(this.chartData, this.options)
    },
}
</script>

<style scoped>
/*  */
</style>
