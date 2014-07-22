System.register("linkedlist.es6", [], function() {
  "use strict";
  var __moduleName = "linkedlist.es6";
  var Node = function Node(data) {
    this.data = data;
    this.next = null;
  };
  ($traceurRuntime.createClass)(Node, {}, {});
  var LinkedList = function LinkedList() {
    $traceurRuntime.superCall(this, $LinkedList.prototype, "constructor", []);
    this.head = {next: null};
    this.count = 0;
    this.OUT_OF_RANGE_ERR = 'Supplied index is out of range.';
  };
  var $LinkedList = LinkedList;
  ($traceurRuntime.createClass)(LinkedList, {
    find: function(n) {
      var cur = this.head.next,
          idx = 1;
      ;
      if (n < 1 || n > this.count)
        cur = null;
      else
        for (idx; idx < n; idx++)
          cur = cur.next;
      return cur;
    },
    insert: function(idx, data) {
      var cur = this.head.next,
          pre = undefined,
          n = parseInt(idx, 10);
      ;
      if (isNaN(n) || n < 1 || n > (this.count + 1))
        throw new Error(this.OUT_OF_RANGE_ERR);
      else {
        this.count++;
        if (n === 1) {
          cur = new Node(data);
          cur.next = this.head.next;
          this.head = {next: cur};
        } else {
          pre = this.find(n - 1);
          cur = new Node(data);
          cur.next = pre.next;
          pre.next = cur;
        }
      }
    },
    remove: function(idx) {
      var cur = undefined,
          pre = undefined,
          n = parseInt(idx, 10);
      ;
      if (isNaN(n) || n < 1 || n > this.count)
        throw new Error(this.OUT_OF_RANGE_ERR);
      else {
        this.count--;
        if (n === 1) {
          cur = this.head.next;
          this.head = {next: cur.next};
        } else {
          pre = this.find(n - 1);
          cur = pre.next;
          pre.next = cur.next;
        }
        cur = null;
      }
    },
    get: function(idx) {
      var cur = undefined,
          n = parseInt(idx, 10);
      ;
      if (isNaN(n) || n < 1 || n > this.count)
        throw new Error(this.OUT_OF_RANGE_ERR);
      else {
        cur = this.find(n);
        return cur.data;
      }
    },
    get size() {
      return this.count;
    }
  }, {});
  ;
  return {
    get Node() {
      return Node;
    },
    get LinkedList() {
      return LinkedList;
    }
  };
});
System.get("linkedlist.es6" + '');
