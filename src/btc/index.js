const bip39 = require('bip39')
const bip32 = require('bip32')
const bitcoin = require('bitcoinjs-lib')

const generatePair = () => {
  const newMnemonic = bip39.generateMnemonic()
  const walletSeed = bip39.mnemonicToSeed(newMnemonic)
  const root = bip32.fromSeed(walletSeed)
  const derivedPath = root.derivePath('m/0\'/0/0')
  const address = bitcoin.payments.p2pkh({ pubkey: derivedPath.publicKey, network: undefined }).address
  return { private: newMnemonic, public: address }
}

module.exports = {
  generatePair
}
