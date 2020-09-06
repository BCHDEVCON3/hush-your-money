/**
 * Initialization
 */
const init = ({ commit }, _xpub) => {
    /* Commit extended public key. */
    commit('setXPub', _xpub)
}

/* Export module. */
export default init
