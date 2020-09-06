/**
 * Reset All
 */
const resetAll = ({ commit }) => {
    console.info('Resetting all systems now...')

    /* Commit empty system. */
    commit('setEmpty')
}

/* Export module. */
export default resetAll
