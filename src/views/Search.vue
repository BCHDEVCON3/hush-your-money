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
                    Perform a real-time blockchain search on ANY address or transaction id.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <v-text-field
                    label="Type or paste your search"
                    hint="Search for an ANY address or transaction id"
                    outlined
                    clearable
                    v-model="searchTxt"
                    @change="handleSearch"
                    @keyup="handleSearch"
                    @paste="handleSearch"
                ></v-text-field>
            </div>
        </div>

        <div class="text-center mt-5" v-if="isSearching">
            <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
        </div>

        <div v-if="txs">
            <div class="row" v-for="(tx, index) of txs" :key="tx + index">
                <div class="col">
                    <span v-if="index < 2" class="text-success">✓</span>
                    <span v-if="index >= 2" class="text-danger">ⅹ</span>
                    {{displayAddress(tx)}}
                </div>
            </div>
        </div>

    </main>
</template>

<script>
/* Import modules. */
import superagent from 'superagent'

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
            isSearching: null,

            output: null,
            txs: null,
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

        displayAddress(_address) {
            if (_address) {
                return _address.slice(12, 20) + ' ... ' + _address.slice(-8)
                // return _address.slice(12)
            } else {
                return null
            }
        },

        startSearchProgress() {
            this.searchInterval = setInterval(() => {
                if (this.searchProgress < 75) {
                    this.searchProgress += 5
                } else {
                    clearInterval(this.searchInterval)
                    this.isSearching = false
                    this.searchProgress = 0
                }
            }, INTERVAL_DELAY)

        },

        handleSearch() {
            if (!this.searchTxt) {
                return
            }

            this.startSearchProgress()

            this.isSearching = true

            let address = null

            if (this.searchTxt.indexOf('bitcoincash:') !== -1) {
                address = this.searchTxt.slice(12)
            } else {
                address = this.searchTxt
            }

            const addrs = {
                v: 3,
                q: {
                    find: {
                        $or: [
                            { 'in.e.a': address },
                            { 'out.e.a': address },
                        ]
                    },
                    limit: 10
                },
                r: {
                    f: '[ .[] | { height: .tx.h, addr: .out[0].e } ]'
                }
            }

            const ENDPOINT = 'https://bitdb.bch.sx/q/'
            const b64 = Buffer.from(JSON.stringify(addrs)).toString('base64')
            const url = ENDPOINT + b64

            // Make an HTTP request to bitdb.fountainhead.cash public endpoint
            superagent
                .get(url)
                // .set('key', '1M2PjV7yGRg4dB8N32Qhw1wrDfDfZyi8VQ')
                .end((err, res) => {
                    if (err) return console.error(err)

                    const r = res.body

                    if (r.c) {
                        r.c.forEach(items => {
                            // console.log(items.msg)
                            console.log(items)
                            this.output += JSON.stringify(items, null, 2)
                            this.txs.push(items.height)
                            // console.log(util.inspect(items, false, null, true))
                        })
                    } else {
                        console.log('RESPONSE:', res.body)
                    }
                })

            /* Show notification. */
            // return this.toast(['Oops!', 'Invalid search, please try again', 'error'])

        }

    },
    created: function () {
        this.searchProgress = 0

        this.isSearching = false

        this.output = ''
        this.txs = []
    },
    mounted: function () {
        //
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
