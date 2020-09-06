<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Hush Your Money</h2>
        </div>

        <hr class="my-1" />

        <div class="row">
            <div class="col-5 text-right">
                Badger:
            </div>
            <div class="col-7">
                {{status.badger}}
            </div>
        </div>
        <div class="row">
            <div class="col-5 text-right">
                Android:
            </div>
            <div class="col-7">
                {{status.android}}
            </div>
        </div>
        <div class="row">
            <div class="col-5 text-right">
                iOS:
            </div>
            <div class="col-7">
                {{status.ios}}
            </div>
        </div>

        <div v-if="getXPub">
            <div class="row">
                <div class="col">
                    <p>
                        You Hush wallet is ready!
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <v-btn
                        color="primary"
                        block
                        dark
                        @click="reset"
                    >
                        Reset Hush wallet
                    </v-btn>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="row">
                <div class="col">
                    <p>
                        Let's setup your NEW Hush wallet.
                        To get started, please enter (paste) your Extended Public Key below.
                    </p>

                    <p>
                        <small class="text-danger">
                            <span>DO NOT SHARE THIS PUBLIC KEY WITH ANYONE YOU DON'T TRUST.</span>
                            YOUR XPUB WILL BE USED TO SECURE YOUR HUSH WALLET.
                        </small>
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <v-text-field
                        label="Extended public key"
                        hint="Keys will always start with `xpub` followed by approximately 100 characters."
                        outlined
                        clearable
                        v-model="xpub"
                    ></v-text-field>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <v-btn
                        color="primary"
                        block
                        dark
                        @click="save"
                    >
                        Save and continue
                    </v-btn>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <p>
                    Fabulas quae commodo deserunt, sunt iudicem do incididunt. Probant ex eiusmod ne
                    eiusmod imitarentur ex admodum quo laboris labore fabulas voluptate id duis
                    incurreret non eram quorum hic possumus fugiat nostrud ab ita dolore doctrina
                    praetermissum hic cernantur nisi irure appellat velit, id laborum qui ingeniis.
                </p>
            </div>

            <div class="col">
                <p>
                    Incididunt ubi aute senserit et do cernantur ea occaecat, tamen cohaerescant
                    incurreret labore vidisse, summis ab deserunt an velit o incididunt sunt multos
                    ut cillum id ab fore duis anim voluptate ut tamen iudicem a aliquip, iis
                    proident consectetur. Est dolore possumus. Do admodum distinguantur, cernantur
                    se deserunt.
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
import Nito from 'nitojs'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            output: null,
            status: null,
            xpub: null,
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
            'init',
            'resetAll',
            'toast',
        ]),

        /**
         * Save (xPub)
         */
        save() {
            /* Validate extended public key. */
            if (!this.xpub) {
                /* Show notification. */
                return this.toast(['Oops!', 'Plase enter a key and try again', 'error'])
            }

            try {
                /* Request root address. */
                const rootAddress = Nito.Address.fromXPub(this.xpub, `m/0/0`)
                console.log('ROOT ADDRESS', rootAddress)

                if (!Nito.Address.isCashAddress(rootAddress)) {
                    /* Show notification. */
                    return this.toast(['Oops!', 'Invalid key, please try again', 'error'])
                }
            } catch (err) {
                console.log('XPUB ERROR:', err)

                /* Show notification. */
                return this.toast(['Oops!', 'Invalid key, please try again', 'error'])
            }

            /* Initialize app. */
            this.init(this.xpub)

            /* Clear xpub. */
            this.xpub = null

            /* Show notification. */
            this.toast(['Done!', 'Hush wallet has been initialized', 'success'])
        },

        reset() {
            /* Reset all. */
            this.resetAll()

            /* Show notification. */
            this.toast(['Done!', 'Hush wallet has been reset', 'success'])
        },

    },
    created: function () {

        /* Request provider statuses. */
        this.status = bchLink.getWalletProviderStatus()
        console.log('Provider statuses:', this.status)

        this.output = JSON.stringify(this.status, null, 2)
    },
    mounted: function () {

    },
}
</script>

<style scoped>
/*  */
</style>
