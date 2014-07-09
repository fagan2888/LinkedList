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


    if(!(this instanceof LinkedList)) return new LinkedList();

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
    * @param {Number} idx The index to insert the data at in the list.
    * @param {*} data The data item to insert into the list.
    */
    this.insert = function(idx, data) {
      var cur = head.next
        , pre = undefined
        , n   = parseInt(idx, 10)
      ;

      if(isNaN(n) || n < 1 || n > (size + 1)) throw new Error(OUT_OF_RANGE_ERR);
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

    /**
     * Privileged method to remove the idx-th Node from the list.
     *
     * @param {Number} idx The index of the node to remove from the list.
     */
    this.remove = function(idx) {
      var cur = undefined
        , pre = undefined
        , n   = parseInt(idx, 10)
      ;

      if(isNaN(n) || n < 1 || n > size) throw new Error(OUT_OF_RANGE_ERR);
      else {
        size--;
        if(n === 1) {
          cur = head.next;
          head = { next: cur.next };
        } else {
          pre = find(n - 1);
          cur = pre.next;
          pre.next = cur.next;
        }
        cur = null;
      }
    };

    /**
     * Privileged method to return the data item in the idx-th list Node. Note, this method
     * returns only the data member of the Node, not the entire Node.
     *
     * @param {Number} idx The index of the node to get the data item for.
     * @returns {*} The idx-th Node's data member.
     */
    this.get = function(idx) {
      var cur = undefined
        , n   = parseInt(idx, 10)
      ;

      if(isNaN(n) || n < 1 || n > size) throw new Error(OUT_OF_RANGE_ERR);
      else {
        cur = find(n);
        return cur.data;
      }
    };

    /**
     * Privileged method to get the number of nodes currently in the list.
     *
     * @returns {Number}
     */
    this.size = function() {
      return size;
    };

    this.dump = function() {
      var cur = head.next;

      while(cur) {
        console.log(cur.data);
        cur = cur.next;
      }
    };
  }

  return LinkedList;
}));