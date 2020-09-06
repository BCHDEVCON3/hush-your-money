/* Import modules. */
import bchLink from 'bitcoincom-link'

/**
 * Get (Next) Address
 *
 * NOTE: In the Bitcoin.com wallet, this method will iterate to the next
 *       available address in the wallet. This will occure regardless of if
 *       the previous address has been used.
 */
const getAddress = async () => {
    /* Initialize error. */
    let error = null

    const data = await bchLink.getAddress({
        protocol: 'BCH',
    })
    .catch(err => {
        console.log('ERROR:', err) // eslint-disable-line no-console

        switch(err.type) {
        case 'CONNECTION_DENIED':
            error = 'User is not signed into wallet.'
            console.error(error) // eslint-disable-line no-console
            break
        case 'NO_PROVIDER':
            error = 'No provider available.'
            console.error(error) // eslint-disable-line no-console
            break
        case 'CANCELED':
            error = 'The user has canceled this request.'
            console.error(error) // eslint-disable-line no-console
            break
        case 'PROTOCOL_ERROR':
            error = 'The provided protocol is not supported by this wallet.'
            console.error(error) // eslint-disable-line no-console
            break
        }
    })

    /* Validate data. */
    if (data && data.address) {
        console.log('User address (async): ' + data.address)
        console.log('User address label (optional): ' + data.label)

        /* Return address. */
        return data.address
    } else {
        /* Return error. */
        return null
    }
}

/* Export module. */
export default getAddress
