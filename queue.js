// Queue Data Structure

class Queue {
    constructor(){
        this.elements = [];
    };

    enqueue(element) {
        this.elements.push(element);
    }

    dequeue() {
        return this.elements.shift();
    }

    peek() {
        return this.elements[0];
    }
};

// Enqueue ve Dequeue 

const queue = new Queue();

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.dequeue();

console.log(queue.elements);
console.log(queue.peek());


