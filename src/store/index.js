/* Import (core) modules. */
import Vue from 'vue'
import Vuex from 'vuex'

/* Import persisted state (for vuex). */
import createPersistedState from 'vuex-persistedstate'

/* Import getters. */
import getAddress from './getters/getAddress'
import getXPub from './getters/getXPub'

/* Import actions. */
import init from './actions/init'
import resetAll from './actions/resetAll'
import toast from './actions/toast'

/* Import mutations. */
import setEmpty from './mutations/setEmpty'
import setXPub from './mutations/setXPub'

Vue.use(Vuex)

/* Set plugins. */
const plugins = [
    createPersistedState()
]

/* Set strict. */
const strict = process.env.NODE_ENV !== 'production'

/* Export store. */
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
        toast,
    },
    mutations: {
        setEmpty,
        setXPub,
    },
    plugins,
    modules: {
        //
    },
    strict,
})
