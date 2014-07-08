(function(root, modef, undefined) {

  if(typeof module !== 'undefined' && module.exports) module.exports = modef(); // node
  else if(typeof define === 'function' && define.amd) define(modef); // amd
  else root.LinkedList = modef(); // <script>

}(this, function() {

  function LinkedList() {
    var me 	              = this
      , head              = { next: null }
      , size              = 0
      , OUT_OF_RANGE_ERR  = 'Supplied index is out of range.'
    ;


    if(!this instanceof LinkedList) return new LinkedList();

    /**
    * Private Node Constructor for the LinkedList.
    * @param {*} data The data to insert into the Node.
    * @returns {LinkedList.Node}
    * @constructor
    */
    function Node(data) {
      this.data = data;
      this.next = null;
    }

    /**
    * Private method for finding the n-the Node in the list.
    *
    * @param n {Number} n The index of the node.
    * @returns {Node || null}
    */
    function find(n) {
      var cur = head.next
        , idx = 1
      ;

      if(n < 1 || n > size) cur = null;
      else for(idx; idx < n; idx++) cur = cur.next;

      return cur;
    }

    /**
    * Privileged method for inserting a node into the list.
    *
    * @param {*} data The data item to insert into the list.
    * @param {Number} n Position to insert the data item, from [1 - size] inclusive.
    */
    this.insert = function(data, n) {
      var cur = head.next
        , pre = undefined
      ;

      if(n < 1 || n > (size + 1)) throw new Error(OUT_OF_RANGE_ERR);
      else {
        size++;
        if(n === 1) {
          cur = new Node(data);
          cur.next = head.next;
          head = { next: cur };
        } else {
          pre = find(n - 1);
          cur = new Node(data);
          cur.next = pre.next;
          pre.next = cur;
        }
      }
    };


    this.remove = function(n) {
      if(n < 1 || n > (size + 1)) throw new Error(OUT_OF_RANGE_ERR);
      
    };

    this.dump = function() {
      var cur = head.next;

      while(cur) {
        console.log(cur.data);
        cur = cur.next;
      }
    };

    this.size = function() {
      return size;
    };
  }

  return LinkedList;
}));