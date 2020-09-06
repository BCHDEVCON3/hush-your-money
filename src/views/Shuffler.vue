<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Shuffler</h2>
        </div>

        <hr class="my-1" />

        <div class="row">
            <div class="col-4 text-right">
                Deposit:
            </div>
            <div class="col-8">
                {{displayAddress('deposit')}}
            </div>
        </div>

        <div class="row">
            <div class="col-4 text-right">
                Change:
            </div>
            <div class="col-8">
                {{displayAddress('change')}}
            </div>
        </div>

        <div class="row">
            <div class="col-4 text-right">
                Privacy:
            </div>
            <div class="col-8">
                {{displayAddress('nito')}}
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col">
                <v-btn
                    color="primary"
                    block
                    dark
                    @click="send"
                >
                    Send to Shuffler
                </v-btn>
            </div>
        </div>

        <div class="row" v-if="hasUpdate">
            <div class="col">
                <h4 class="text-danger">
                    DEPOSIT RECEIVED!
                </h4>

                <h4>
                    Shuffling will begin momentarily, please stand by...
                </h4>
            </div>
        </div>
    </main>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

/* Import modules. */
import bchLink from 'bitcoincom-link'
import Nito from 'nitojs'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            address: null,
            blockchain: null,
            hasUpdate: null,
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

        displayAddress(_account) {
            if (this.getAddress(_account)) {
                /* Retrieve address. */
                const address = this.getAddress(_account)

                return address.slice(12, 20) + ' ... ' + address.slice(-8)
                // return address.slice(12)
            } else {
                return null
            }
        },

        /**
         * Initialize Blockchain
         */
        initBlockchain() {
            /* Initialize Nito blockchain. */
            this.blockchain = new Nito.Blockchain()
            console.log('NITO BLOCKCHAIN', this.blockchain)

            if (this.getAddress('nito')) {
                /* Subscribe to address updates. */
                this.blockchain
                    .subscribe('address', this.getAddress('nito'))
            }

            /* Handle blockchain updates. */
            this.blockchain.on('update', (_msg) => {
                console.log('SHUFFLER RECEIVED BLOCKCHAIN UPDATE (msg):', _msg)

                if (_msg && _msg.type === 'mempool') {
                    /* Set flag. */
                    this.hasUpdate = true
                }
            })
        },

        send() {
            bchLink.sendAssets({
                to: this.getAddress('nito'),
                protocol: 'BCH',
                value: '0.0001337',
            })
            .then(data => {
                const {
                    txid,
                } = data

                console.log('Completed transaction id: ' + txid)
            })
            .catch(err => {
                switch(err.type) {
                case 'NO_PROVIDER':
                    console.log('No provider available.')
                    break
                case 'PROTOCOL_ERROR':
                    console.log('The provided protocol is not supported by this wallet.')
                    break
                case 'SEND_ERROR':
                    console.log('There was an error when broadcasting this transaction to the network.')
                    break
                case 'MALFORMED_INPUT':
                    console.log('The input provided is not valid.')
                    break
                case 'CANCELED':
                    console.log('The user has canceled this transaction request.')
                    break
                }
            })
        },

    },
    created: async function () {
        /* Initialize blockchain. */
        this.initBlockchain()

        this.hasUpdate = false
    },
    mounted: function () {

    },
    beforeDestroy() {
        /* Validate blockchain. */
        if (this.blockchain) {
            /* Unsubscribe from blockchain. */
            this.blockchain.unsubscribe()
        }
    },
}
</script>

<style scoped>
/*  */
</style>
