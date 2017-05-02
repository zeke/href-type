const expect = require('chai').expect
const describe = require('mocha').describe
const it = require('mocha').it
const hrefType = require('..')
const examples = [
  [null, null],
  ['', null, 'empty string'],
  ['mailto:zeke@sikelianos.com', 'mailto'],
  ['tel:+15054592942', 'tel'],
  ['sms:+15054592942', 'sms'],
  ['https://example.com', 'absolute', 'absolute https'],
  ['http://example.com', 'absolute', 'absolute http'],
  ['irc://irc.example.com', 'protocol'],
  ['/foo/bar.html', 'rooted'],
  ['baz/qux.css', 'relative'],
  ['#about-us', 'fragment']
]

describe('href-type', function(){
  it('is a function', function() {
    expect(hrefType).to.be.a('function')
  })

  examples.forEach(function(example){
    var input = example[0]
    var output = example[1]
    var type = example[2] || example[1]
    it(`detects ${type} links`, function() {
      expect(hrefType(input)).to.equal(output)
    })
  })

})
