/**
 * Set Empty
 *
 * This will completely reset the entire system.
 */
const setEmpty = (state) => {
    /* Reset extended public key. */
    state.xpub = null
}

/* Export module. */
export default setEmpty
