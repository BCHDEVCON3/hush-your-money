/* Import (core) modules. */
import Vue from 'vue'
import Vuex from 'vuex'

/* Import persisted state (for vuex). */
import createPersistedState from 'vuex-persistedstate'

/* Import getters. */
import getAddress from './getters/getAddress'
import getDerivationPath from './getters/getDerivationPath'
import getHDNode from './getters/getHDNode'
import getMasterSeed from './getters/getMasterSeed'
import getMnemonic from './getters/getMnemonic'
import getXPub from './getters/getXPub'

/* Import actions. */
import init from './actions/init'
import resetAll from './actions/resetAll'
import toast from './actions/toast'

/* Import mutations. */
import setEmpty from './mutations/setEmpty'
import setMasterSeed from './mutations/setMasterSeed'
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
         * Master Seed
         *
         * A 32-byte seed, which can be generated randomly, by importing
         * from an existing wallet, or from an extended public key.
         */
        masterSeed: null,

        /**
         * Extended Public Key
         */
        xpub: null,
    },
    getters: {
        getAddress,
        getDerivationPath,
        getHDNode,
        getMasterSeed,
        getMnemonic,
        getXPub,
    },
    actions: {
        init,
        resetAll,
        toast,
    },
    mutations: {
        setEmpty,
        setMasterSeed,
        setXPub,
    },
    plugins,
    modules: {
        //
    },
    strict,
})
