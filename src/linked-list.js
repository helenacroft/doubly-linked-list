const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var node = new Node(data);
        if(!this.length) {
            this.head(node);
            this.tail(node);
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this.tail(node);
        }
        this.length++; 
    }

    head() {
        if(arguments.length) {
            this._head = arguments[0];
        } else {
            return this._head ? this._head.data : null;
        }
    }

    tail() {
        if(arguments.length) {
            this._tail = arguments[0];
        } else {
            return this.tail ? this._tail.data : null;
        }
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
