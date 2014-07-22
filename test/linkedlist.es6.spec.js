import {LinkedList} from '../linkedlist.es6';

let chai       = require('chai')
  , expect     = chai.expect
;

chai.should();

describe('LinkedList', function() {
  it('should be defined as a node module', function() {
    LinkedList.should.be.a('function');
  });

  describe('Constructor', function() {
    it("should use the 'new' operator internally when not invoked as such", function() {
      var ll = LinkedList();

      ll.insert.should.be.a('function');
      expect(this.insert).to.not.exist;
    });

    it("should return an instance of 'LinkedList'", function() {
      (new LinkedList()).should.be.an.instanceof(LinkedList);
    });
  });

  describe('Privileged Methods', function() {
    var ll = undefined;

    beforeEach(function() {
      ll = new LinkedList();
    });

    describe('::insert(idx, data)', function() {
      it("should throw an error when the value for 'idx' is out of range", function() {
        var f  = function() { ll.insert(10, 'foo'); }
            , g  = function() { ll.insert(); }
            , h  = function() { ll.insert('foo'); }
            ;

        expect(f).to.throw(Error, /index is out of range/);
        expect(g).to.throw(Error, /index is out of range/);
        expect(h).to.throw(Error, /index is out of range/);
      });

      it("should insert a new node at position 'idx' when 'idx' is within range", function() {
        ll.insert(1, 'foo');
        ll.size().should.equal(1);
        ll.insert(2, function() {console.log('bar')});
        ll.insert(1, {item:'baz'});
        ll.size().should.equal(3);
      });

      it('should increase the index of all nodes following the inserted node', function() {
        ll.insert(1, 'foo');
        ll.insert(1, 'bar');
        ll.get(2).should.be.a('string').and.equal('foo');
      });
    });

    describe('::remove(idx)', function() {
      it("should throw an error when the value for 'idx' is out of range", function() {
        var f = function() { ll.remove(1) }
            , g = function() { ll.remove(0) }
            ;

        expect(f).to.throw(Error, /index is out of range/);
        expect(g).to.throw(Error, /index is out of range/);
      });

      it("should remove the node positioned at 'idx' when 'idx' is within range", function() {
        ll.insert(1, 'foobar');
        ll.size().should.equal(1);
        ll.remove(1);
        ll.size().should.equal(0);
      });

      it("should decrease the index of all nodes following the removed node", function() {
        ll.insert(1, 'foo');
        ll.insert(2, 'bar');
        ll.remove(1);
        ll.get(1).should.be.a('string').and.equal('bar');
      });
    });

    describe('::get(idx)', function() {
      it("should throw an error when the value for 'idx' is out of range", function() {
        var f = function() { ll.get(1) }
            , g = function() { ll.get('foo') }
            ;

        expect(f).to.throw(Error, /index is out of range/);
        expect(g).to.throw(Error, /index is out of range/);
      });

      it("should return the data member of the node positioned at 'idx' when 'idx' is within range", function() {
        ll.insert(1, 'foobar');
        ll.insert(2, 25);
        ll.insert(3, true);
        ll.insert(4, function() {console.log('foobar')});
        ll.insert(5, {key: false, foo: 'bar'});
        ll.get(1).should.be.a('string').and.equal('foobar');
        ll.get(2).should.be.a('number').and.equal(25);
        ll.get(3).should.be.a('boolean').and.be.ok;
        ll.get(4).should.be.a('function');
        ll.get(5).should.be.a('object').and.have.keys(['key', 'foo']);
      });
    });

    describe('::size()', function() {
      it('should return the non-negative number of nodes currently in the list', function() {
        ll.insert(1, 'foo');
        ll.insert(2, 'bar');
        ll.insert(3, 'baz');
        ll.size().should.be.a('number').and.equal(3);
        ll.remove(2);
        ll.size().should.equal(2);
        ll.remove(1);
        ll.remove(1);
        ll.size().should.equal(0);
      });
    });
  });
});