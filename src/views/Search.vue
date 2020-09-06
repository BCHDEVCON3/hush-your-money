<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Search</h2>
        </div>

        <!-- <hr class="my-1" /> -->
        <div class="row mt-n2">
            <div class="col">
                <div class="progress search-progress">
                    <div class="progress-bar bg-info" role="progressbar" :style="{ width: searchProgress + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <p>
                    Ab summis aliqua do eiusmod et quae iis laborum, ut elit firmissimum, id fugiat
                    nescius exercitation. Do id quae dolor esse, ita laborum transferrem, mentitum
                    arbitrantur ubi officia et hic quid probant consectetur ut arbitror qui iudicem
                    ea quorum de an fugiat mentitum, quid o excepteur a noster, veniam cupidatat a
                    comprehenderit.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <v-text-field
                    label="Extended public key"
                    outlined
                    clearable
                    v-model="searchTxt"
                    @change="handleSearch"
                    @keyup="handleSearch"
                    @paste="handleSearch"
                ></v-text-field>
            </div>
        </div>

    </main>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

/* Set interval delay. */
const INTERVAL_DELAY = 250

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            searchTxt: null,
            searchProgress: null,
            searchInterval: null,
        }
    },
    computed: {
        ...mapGetters([
            'getAddress',
            'getMasterSeed',
        ]),

    },
    methods: {
        ...mapActions([
            'toast',
        ]),

        handleSearch() {
            /* Show notification. */
            return this.toast(['Oops!', 'You cannot do that, please try again', 'error'])

        }
    },
    created: function () {
        this.searchProgress = 5
    },
    mounted: function () {
        this.searchInterval = setInterval(() => {
            if (this.searchProgress < 75) {
                this.searchProgress += 5
            } else {
                clearInterval(this.searchInterval)
            }
        }, INTERVAL_DELAY)
    },
    beforeDestroy() {
        /* Validate search interval. */
        if (this.searchInterval) {
            /* Clear interval. */
            clearInterval(this.searchInterval)
        }
    },
}
</script>

<style scoped>
.search-progress {
    height: 1px;
}
</style>
