'use strict'
var expect = require('chai').expect
var EpicChain = require('../dist/epicchain').default

describe('static version test', () => {
  it('should return 0.10.0', () => {
    var actual = EpicChain.VERSION
    expect(actual).to.equal('0.10.0')
  })
})

describe('instance version test', () => {
  it('should return 0.10.1', () => {
    var epicchain = new EpicChain()
    var actual = epicchain.VERSION
    expect(actual).to.equal('0.10.1')
  })
})
