/* Import (core) modules. */
import Vue from 'vue'
import Vuex from 'vuex'

/* Import getters. */
import getAddress from './getters/getAddress'
import getXPub from './getters/getXPub'

/* Import actions. */
import init from './actions/init'
import resetAll from './actions/resetAll'

/* Import mutations. */
import setEmpty from './mutations/setEmpty'
import setXPub from './mutations/setXPub'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /**
         * Extended Public Key
         */
        xpub: null,
    },
    getters: {
        getAddress,
        getXPub,
    },
    actions: {
        init,
        resetAll,
    },
    mutations: {
        setEmpty,
        setXPub,
    },
    modules: {
        //
    }
})
