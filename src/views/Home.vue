<template>
    <main class="container-fluid">
        <div class="text-center my-2">
            <h2>Hush Your Money</h2>
        </div>

        <hr class="my-1" />

        <div v-if="isDeviceSupported">
            <div v-if="getXPub">
                <div class="row">
                    <div class="col">
                        <p class="text-center">
                            {{displayAddress}}
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
        </div>

        <div class="row" v-else>
            <div class="col">
                <h3>Your device is NOT supported.</h3>
                Please download the link below onto an Android device to continue this demo.
            </div>

            <div class="col">
                <h5>Download link:</h5>

                <small>
                    <a href="https://ipfs.io/ipfs/QmTaAWcTJUw2QaoTLa6cM2ERLfnrtiVrHLPtoic21fFbTz/bitcoin-wallet-dev.apk">
                    https://ipfs.io/ipfs/QmTaAWcTJUw2QaoTLa6cM2ERLfnrtiVrHLPtoic21fFbTz/bitcoin-wallet-dev.apk</a>
                </small>
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
            xpub: null,
        }
    },
    computed: {
        ...mapGetters([
            'getAddress',
            'getXPub',
        ]),

        /**
         * Is Device Supported
         */
        isDeviceSupported() {
            /* Retrieve wallet provider status. */
            const status = bchLink.getWalletProviderStatus()
            console.log('PROVIDER STATUS', status)

            if (
                status.badger === 'NOT_AVAILABLE' &&
                status.android === 'NOT_AVAILABLE' &&
                status.ios === 'NOT_AVAILABLE'
            ) {
                return false
            } else {
                return true
            }
        },

        displayAddress() {
            if (this.getXPub) {
                const rootAddress = Nito.Address.fromXPub(this.getXPub, `m/0/0`)

                return rootAddress.slice(12, 28) + ' ... ' + rootAddress.slice(-16)
                // return rootAddress.slice(12)
            } else {
                return null
            }
        },

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
            this.toast(['Done!', 'Hush wallet is initialized', 'success'])
        },

        reset() {
            /* Reset all. */
            this.resetAll()

            /* Show notification. */
            this.toast(['Done!', 'Hush wallet has been reset', 'success'])
        },

    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
