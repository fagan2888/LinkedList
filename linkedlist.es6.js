class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    super();
    this.head = { next: null };
    this.count = 0;
    this.OUT_OF_RANGE_ERR = 'Supplied index is out of range.'
  }

  find(n) {
    var cur = this.head.next
      , idx = 1
    ;

    if(n < 1 || n > size) cur = null;
    else for(idx; idx < n; idx++) cur = cur.next;

    return cur;

  }

  get size() {
    return this.count;
  }
}