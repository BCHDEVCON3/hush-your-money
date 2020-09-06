/* Import modules. */
import Nito from 'nitojs'

/**
 * Initialization
 */
const init = ({ commit }, _xpub) => {
    /* Commit extended public key. */
    commit('setXPub', _xpub)

    /* Generate master seed. */
    const masterSeed = Nito.Crypto.hash(_xpub, 'sha256')

    /* Commit master seed. */
    commit('setMasterSeed', masterSeed)
}

/* Export module. */
export default init
