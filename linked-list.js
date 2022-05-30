// Linked List Data Structure

let node_1 = {
    value: "Node 1",
    next: null
};

let node_2 = {
    value: "Node 2",
    next: null
};

let node_3 = {
    value: "Node 3",
    next: null
};

// Node next value

node_1.next = node_2;
node_2.next = node_3;

// All nodes

let node = node_1;

while(node) {
     console.log(node.value);
     node = node.next;
}