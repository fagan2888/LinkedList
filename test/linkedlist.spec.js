var should     = require('chai').should()
  , LinkedList = require('../linkedlist')
;

describe('LinkedList', function() {
  it('should be defined as a node module', function() {
    LinkedList.should.be.a('function');
  });
});