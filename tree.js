// Tree Data Structure

class Tree {
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

// Root

let root = new Tree("Javascript");

// Nodes of Root

let node1 = new Tree("Node.js");
let node2 = new Tree("Electron.js");
let node3 = new Tree("React.js");

// Push nodes to root

root.children.push(node1, node2, node3);

// Child Nodes

node1.children.push(
    new Tree("Express.js"),
    new Tree("Nest.js")
);

console.log(root);