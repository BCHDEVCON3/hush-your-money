/**
 * Get Master Seed
 */
const getMasterSeed = (state) => {
    /* Validate state. */
    if (!state || !state.masterSeed) {
        return null
    }

    /* Return master seed. */
    return Buffer.from(state.masterSeed, 'hex')
}

/* Export module. */
export default getMasterSeed
