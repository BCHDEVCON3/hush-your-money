<template>
    <main>

        <!-- <main id="app">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>


        </main> -->

        <v-toolbar
            dense
            dark
            color="dark"
        >
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <!-- <v-img :src="require('@/assets/bitcoin-com-icon.png')" class="bitcoin-com-icon"></v-img> -->
            <!-- <v-img :src="require('@/assets/logo.png')"></v-img> -->

            <v-toolbar-title class="toolbar-title" @click="loadWin('/')">
                <span class="text-bitcoin">Bitcoin.com</span>
                <span class="text-hush">Hush</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="loadWin('search')">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon @click="loadWin('analyst')">
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon @click="loadWin('shuffler')">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>

        <router-view/>

    </main>
</template>

<script>
/**
 * Path to Bitcoin.com Wallet Dev
 * https://ipfs.io/ipfs/QmTaAWcTJUw2QaoTLa6cM2ERLfnrtiVrHLPtoic21fFbTz/bitcoin-wallet-dev.apk
 */

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            //
        }
    },
    methods: {
        /**
         * Load Window
         */
        loadWin(_win) {
            this.$router.push(_win)
        },

    },
    created: function () {

    },
    mounted: function () {

    },
}
</script>

<style>
.toolbar-title {
    font-weight: 600;
}
.toolbar-title span {
    margin-right: 3px;
}
.toolbar-title .text-bitcoin {
    color: rgba(255, 255, 255, 0.8);
}
.toolbar-title .text-hush {
    color: rgba(0, 193, 140, 0.8);
}
</style>
