/**
 * Get HD Node
 */
const getHDNode = (state, getters) => {
    /* Initialize mnemonic. */
    const mnemonic = getters.getMnemonic

    /* Initialize HD node. */
    const hdNode = mnemonic.toHDPrivateKey()

    /* Return HD node. */
    return hdNode
}

/* Export module. */
export default getHDNode
