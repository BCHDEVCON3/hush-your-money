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
        >
            <v-toolbar-title class="toolbar-title" @click="loadWin('/')">
                <span class="text-bitcoin">Bitcoin.com</span>
                <span class="text-hush">Hush</span>
            </v-toolbar-title>

            <v-progress-linear
                :active="loading"
                :indeterminate="loading"
                absolute
                bottom
                color="deep-purple accent-4"
            ></v-progress-linear>

            <v-spacer></v-spacer>

            <v-btn icon @click="loadWin('search')">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon @click="loadWin('analyst')">
                <v-icon>mdi-clipboard-pulse-outline</v-icon>
                <!-- <v-icon>mdi-dna</v-icon> -->
            </v-btn>

            <v-btn icon @click="loadWin('shuffler')">
                <!-- <v-icon>mdi-electron-framework</v-icon> -->
                <v-icon>mdi-rotate-orbit</v-icon>
            </v-btn>
        </v-toolbar>

        <router-view/>

    </main>
</template>

<script>
export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            loading: null
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
        /* Initialize loading. */
        this.loading = false
    },
    mounted: function () {
        // setTimeout(() => {
        //     this.loading = true
        //     console.log('START LOADING');
        // }, 2000)
        // setTimeout(() => {
        //     this.loading = false
        //     console.log('STOP LOADING');
        // }, 7000)
    },
}
</script>

<style>
.toolbar-title {
    font-weight: 600;
}
.toolbar-title span {
    margin-right: 2px;
}
.toolbar-title .text-bitcoin {
    color: rgba(255, 255, 255, 0.9);
}
.toolbar-title .text-hush {
    color: rgba(0, 193, 140, 0.9);
}
</style>
