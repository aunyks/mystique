const openpgp = require('openpgp')

const defaultOptions = {
  userIds: { name: 'Mystique', email: 'user@domain.tld' },
  curve: 'secp256k1',
  // passphrase: ''
}

const generatePair = async passphrase => {
  const options = Object.assign(defaultOptions, { passphrase })
  const keys = await openpgp.generateKey(options)
  return {
    private: keys.privateKeyArmored,
    public: keys.publicKeyArmored
  }
}

module.exports = {
  generatePair
}
