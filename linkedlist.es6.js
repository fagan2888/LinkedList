class LinkedList {


  constructor() {
    super();
    this.count = 0;
    this.head = { next: null };
  }

  get size() {
    return this.count;
  }
}

var ll = new LinkedList();

console.log(ll.size);