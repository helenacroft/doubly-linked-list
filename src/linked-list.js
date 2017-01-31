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

    findNode(index) {
        var currentElem = this._head;
        for(var i = 0; i < index; i++) {
            currentElem = currentElem.next;
        }
        return currentElem;
    }

    at(index) {
        return this.findNode(index).data;
    }

    insertAt(index, data) {
        var currentElem = this.findNode(index);
        currentElem.data = data;
    }

    isEmpty() {
        return this.length ? false : true; 
    }

    clear() {
        this.tail(null);
        this.head(null);
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var delElem =  this.findNode(index);
        var node1 = delElem.prev;
        var node2 = delElem.next;
        node1.next = node2;
        node2.prev = node1;
        this.length--;
    }
    swap(a, b) {
        var temp = a;
        a = b;
        b = temp;
    }

    reverse() {
        this.swap(this._head, this._tail);       
        var currentElem = this._head;
        for(var i = 0; i < this.length; i++) {
            this.swap(currentElem.next, currentElem.prev); 
            currentElem = currentElem.next;
        } 
    }

    indexOf(data) {
        var currentElem = this._head;
        for(var i = 0; i < this.length; i++) {
            if(currentElem.data == data) return i;
            currentElem = currentElem.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
