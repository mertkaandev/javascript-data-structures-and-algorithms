// Stack Data Structure

class Stack {
    constructor(){
        this.books = []
    };

    push(book1){
        this.books.push(book1)
    }

    pop() {
        return this.books.pop()
    }
    
};

// Stack Instance

let myStack = new Stack();

// Push

myStack.push("book-1"); 
myStack.push("book-2");
myStack.push("book-3");

console.log(myStack.books);

// Pop

myStack.pop()

console.log(myStack.books);

// Simple create stack with Javascript

const myIdeas = []

myIdeas.push("web");
myIdeas.push("mobile");
myIdeas.pop();

console.log(myIdeas);