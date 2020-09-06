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

        <div class="row">
            <div class="col">
                <p>
                    Ex eram instituendarum, se quorum cupidatat. De ullamco est probant, e an
                    tractavissent. An eram nulla amet mandaremus si quamquam esse legam incurreret
                    aliqua te te fugiat se veniam, ab e amet tempor nisi. An occaecat
                    familiaritatem, eu quo duis eram enim.Commodo praesentibus de senserit in
                    doctrina ex summis eu aute vidisse admodum, possumus id probant in id sunt
                    multos irure mandaremus quo de aute appellat expetendis ut sunt officia quo sint
                    quorum, veniam exquisitaque ullamco minim senserit.
                </p>
            </div>
        </div>
    </main>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

/* Import modules. */
import bchLink from 'bitcoincom-link'
// import Nito from 'nitojs'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            address: null,
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
        //
    },
    mounted: function () {

    },
}
</script>

<style scoped>
/*  */
</style>
