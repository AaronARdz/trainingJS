class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.array = [];
	}
	peek() {
		return this.array[this.array -1];
	}
	push(value) {
		this.array.push(value);
		return this;
	}
	pop() {
		this.array.pop()
		return this;
	}
}

const myStack = new Stack();
myStack.push('google');
myStack.push('facebook');
myStack.push('amazon');
myStack.push('udemy');

console.log(myStack)
console.log(myStack.top)
myStack.pop();
console.log(myStack.top)