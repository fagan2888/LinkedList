var LinkedList = function LinkedList() {
  "use strict";
  $traceurRuntime.superCall(this, $LinkedList.prototype, "constructor", []);
  this.count = 0;
  this.head = {next: null};
};
var $LinkedList = LinkedList;
($traceurRuntime.createClass)(LinkedList, {get size() {
    "use strict";
    return this.count;
  }}, {});
var ll = new LinkedList();
console.log(ll.size);
console.log(ll.head);
