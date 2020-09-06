/**
 * Get Extended Public Key
 */
const getXPub = (state) => {
    /* Validate state. */
    if (!state || !state.xpub) {
        return null
    }

    /* Return master seed. */
    return state.xpub
}

/* Export module. */
export default getXPub
