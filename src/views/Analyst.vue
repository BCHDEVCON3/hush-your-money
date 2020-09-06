<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Analyst</h2>
        </div>

        <hr class="my-1" />

        <AnalystDoughnutChart :chartdata="chartData" :options="chartOptions"/>


        <div v-if="accounts" class="text-center">
            <h3 class="mb-3">Deposit Accounts</h3>

            <div class="row mt-n4" v-for="(address, index) of accounts.deposit" :key="address">
                <div class="col">
                    <small :class="{ 'text-success': index < 4, 'text-danger': index >= 4 }">{{displayAddress(address)}}</small>
                </div>
            </div>
        </div>

        <div v-if="accounts" class="text-center">
            <h3 class="mb-3">Change Accounts</h3>

            <div class="row mt-n4" v-for="(address, index) of accounts.change" :key="address">
                <div class="col">
                    <small :class="{ 'text-success': index < 2, 'text-danger': index >= 2 }">{{displayAddress(address)}}</small>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

/* Import modules. */
import Nito from 'nitojs'

/* Import components. */
import AnalystDoughnutChart from '@/components/AnalystDoughnutChart'

export default {
    components: {
        AnalystDoughnutChart,
    },
    data: () => {
        return {
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
            },

            accounts: null,
        }
    },
    computed: {
        ...mapGetters([
            'getAddress',
            'getXPub',
        ]),

    },
    methods: {
        ...mapActions([
            'toast',
        ]),

        displayAddress(_address) {
            if (_address) {
                // return _address.slice(12, 20) + ' ... ' + _address.slice(-8)
                return _address.slice(12)
            } else {
                return null
            }
        },

    },
    created: function () {
        this.accounts = {
            deposit: [],
            change: [],
        }

        /* Handle deposit address. */
        for (let i = 0; i <= 10; i++) {
            // console.log(i, Nito.Address.fromXPub(xpub, `m/0/${i}`))
            this.accounts.deposit.push(Nito.Address.fromXPub(this.getXPub, `m/0/${i}`))
        }

        /* Handle change address. */
        for (let i = 0; i <= 10; i++) {
            // console.log(i, Nito.Address.fromXPub(xpub, `m/1/${i}`))
            this.accounts.change.push(Nito.Address.fromXPub(this.getXPub, `m/1/${i}`))
        }

        console.log('ACCOUNTS', this.accounts);

    },
    mounted: function () {
        // this.renderChart(this.chartData, this.options)
    },
}
</script>

<style scoped>
/*  */
</style>
