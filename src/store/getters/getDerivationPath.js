/**
 * Get Derivation Path
 */
const getDerivationPath = () => (_chainid, _acctIdx) => {
    /* Validate chain id. */
    if (!Number.isInteger(_chainid)) {
        throw new Error('Invalid chain id.')
    }

    /* Validate account index. */
    if (!Number.isInteger(_acctIdx)) {
        throw new Error('Invalid account index.')
    }

    /* Return (hardened) derivation path. */
    return `m/44'/145'/0'/${_chainid}/${_acctIdx}`
}

/* Export module. */
export default getDerivationPath
