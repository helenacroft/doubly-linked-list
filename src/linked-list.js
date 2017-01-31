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
        return this;
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
            return this._tail ? this._tail.data : null;
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
        if(this.length){
            var currentElem = this.findNode(index);
            currentElem.data = data;
            return this;
        } else return this;
    }

    isEmpty() {
        return this.length ? false : true; 
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if(this.length>1) {
            var delElem =  this.findNode(index);
            var node1 = delElem.prev;
            var node2 = delElem.next;
            node1.next = node2;
            node2.prev = node1;
            this.length--;
            return this;
            
        } else {
            this.clear();
            return this;
        }
    }
    swap(a, b) {
        var temp = a;
        a = b;
        b = temp;
    }

    reverse() {
        var temp = this._head;
        this.head(this._tail);
        this.tail(temp);   
        var currentElem = this._head;
        for(var i = 0; i < this.length; i++) {
            var temp = currentElem.next;
            currentElem.next = currentElem.prev;
            currentElem.prev = temp;
            currentElem = currentElem.next;
        } 
        return this;
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
