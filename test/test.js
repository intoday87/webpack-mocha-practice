var expect = require('chai').expect;
var sample = require('../src/sample');

describe('Sample', function() {
  it('should not be undefind', function () {
    expect(sample).to.be.empty;
  });
});