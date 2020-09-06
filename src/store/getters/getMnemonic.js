/* Import modules. */
import Nito from 'nitojs'

/**
 * Get Mnemonic
 */
const getMnemonic = (state, getters) => {
    /* Set master seed. */
    const masterSeed = getters.getMasterSeed

    /* Set language. */
    const language = 'English'

    /* Initialize mnemonic. */
    const mnemonic = Nito.Crypto.mnemonic(masterSeed, language)

    /* Return mnemonic. */
    return mnemonic
}

/* Export module. */
export default getMnemonic
