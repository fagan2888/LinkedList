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
    let cur = this.head.next
      , idx = 1
    ;

    if(n < 1 || n > this.count) cur = null;
    else for(idx; idx < n; idx++) cur = cur.next;

    return cur;

  }

  insert(idx, data) {
    let cur = this.head.next
      , pre = undefined
      , n   = parseInt(idx, 10)
    ;

    if(isNaN(n) || n < 1 || n > (this.count + 1)) throw new Error(this.OUT_OF_RANGE_ERR);
    else {
      this.count++;
      if(n === 1) {
        cur = new Node(data);
        cur.next = this.head.next;
        this.head = { next: cur };
      } else {
        pre = this.find(n - 1);
        cur = new Node(data);
        cur.next = pre.next;
        pre.next = cur;
      }
    }
  }

  remove(idx) {
    let cur = undefined
      , pre = undefined
      , n   = parseInt(idx, 10)
    ;

    if(isNaN(n) || n < 1 || n > this.count) throw new Error(this.OUT_OF_RANGE_ERR);
    else {
      this.count--;
      if(n === 1) {
        cur = this.head.next;
        this.head = { next: cur.next };
      } else {
        pre = this.find(n - 1);
        cur = pre.next;
        pre.next = cur.next;
      }
      cur = null;
    }
  }

  get(idx) {
    let cur = undefined
      , n   = parseInt(idx, 10)
    ;

    if(isNaN(n) || n < 1 || n > this.count) throw new Error(this.OUT_OF_RANGE_ERR);
    else {
      cur = this.find(n);
      return cur.data;
    }

  }

  get size() {
    return this.count;
  }
}

export {Node, LinkedList};