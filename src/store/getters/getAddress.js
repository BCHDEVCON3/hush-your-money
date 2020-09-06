/* Import modules. */
import Nito from 'nitojs'

/**
 * Get Address
 *
 * Returns the next avaialble address for the specified account.
 */
const getAddress = (state, getters) => (_account) => {
    /* Initialize chain. */
    let chain = null

    /* Select chain. */
    switch(_account) {
    case 'deposit':
        chain = 0
        break
    case 'change':
        chain = 1
        break
    case 'nito':
        chain = 7867
        break
    }

    /* Validate chain. */
    if (chain === null) {
        return null
    }

    /* Set current index. */
    // FIXME: We hard-code this to save time during the event.
    const currentIndex = 0

    /* Set derivation path. */
    const path = getters.getDerivationPath(chain, currentIndex)

    /* Initialize HD node. */
    const hdNode = getters.getHDNode

    /* Initialize child node. */
    const childNode = hdNode.deriveChild(path)

    /* Set (receiving) address. */
    const address = Nito.Address.toCashAddress(childNode)

    /* Return address. */
    return address
}

/* Export module. */
export default getAddress
