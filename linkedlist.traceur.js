var Node = function Node(data) {
  "use strict";
  this.data = data;
  this.next = null;
};
($traceurRuntime.createClass)(Node, {}, {});
var LinkedList = function LinkedList() {
  "use strict";
  $traceurRuntime.superCall(this, $LinkedList.prototype, "constructor", []);
  this.head = {next: null};
  this.count = 0;
  this.OUT_OF_RANGE_ERR = 'Supplied index is out of range.';
};
var $LinkedList = LinkedList;
($traceurRuntime.createClass)(LinkedList, {
  find: function(n) {
    "use strict";
    var cur = this.head.next,
        idx = 1;
    ;
    if (n < 1 || n > size)
      cur = null;
    else
      for (idx; idx < n; idx++)
        cur = cur.next;
    return cur;
  },
  get size() {
    "use strict";
    return this.count;
  }
}, {});
