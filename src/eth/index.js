const bip39 = require('bip39')
const hdKey = require('ethereumjs-wallet/hdkey')

const generatePair = () => {
  const newMnemonic = bip39.generateMnemonic()
  const walletSeed = bip39.mnemonicToSeed(newMnemonic)
  const wallet = hdKey.fromMasterSeed(walletSeed)
  return {
    private: newMnemonic,
    public: wallet.getWallet().getChecksumAddressString()
  }
}

module.exports = {
  generatePair
}
