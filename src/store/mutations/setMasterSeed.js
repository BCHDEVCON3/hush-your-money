/**
 * Set Master Seed
 */
const setMasterSeed = (state, _seed) => {
    /* Set master seed. */
    state.masterSeed = Buffer.from(_seed).toString('hex')
}

/* Export module. */
export default setMasterSeed
