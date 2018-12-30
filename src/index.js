const pgp = require('./pgp')
const btc = require('./btc')
const eth = require('./eth')

const createIdentity = async passphrase => {
  return {
    pgp: await pgp.generatePair(passphrase),
    btc: btc.generatePair(),
    eth: eth.generatePair()
  }
}

module.exports = {
  pgp,
  btc,
  eth,
  createIdentity
}
