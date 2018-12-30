const bip39 = require('bip39')
const assert = require('assert')
const {
  pgp,
  btc,
  eth,
  createIdentity
} = require('../src')

describe('Mystique', () => {
  describe('Encryption / Signing', () => {
    describe('PGP', () => {
      it('generates non-empty keypair', done => {
        pgp.generatePair('hello')
          .then(keys => {
            const { private, public } = keys
            if (typeof private === 'undefined' || typeof public === 'undefined') {
              throw 'Keypair returned undefined.'
            }
            done()
          })
      })
    })
  })

  describe('Finance', () => {
    describe('BTC', () => {
      it('generates a non-empty keypair', () => {
        const { private, public } = btc.generatePair()
        if (typeof private === 'undefined' || typeof public === 'undefined') {
          throw 'Keypair returned undefined.'
        }
        assert(bip39.validateMnemonic(private))
      })
    })

    describe('ETH', () => {
      it('generates a non-empty keypair', () => {
        const { private, public } = eth.generatePair()
        if (typeof private === 'undefined' || typeof public === 'undefined') {
          throw 'Keypair returned undefined.'
        }
        assert(bip39.validateMnemonic(private))
      })
    })
  })

  it('generates encryption/signing and finance keys', async () => {
    const newIdentity = await createIdentity('hello')
    for (const protocol of Object.keys(newIdentity)) {
      const { private, public } = newIdentity[protocol]
      if (typeof private === 'undefined' || typeof public === 'undefined') {
        throw `Keypair of algorithm ${protocol} returned undefined.`
      }
    }
  })
})