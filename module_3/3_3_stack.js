class Stack {
  constructor() {
    this.item = [];
  }
  push(val) {
    this.item.push(val);
  }
  pop() {
    if (this.isempty()) {
      return undefined;
    }
    return this.item.pop();
  }
  peak() {
    if(this.isempty()){
        return undefined;
    }
    return this.item[this.item.length-1];
  }

  isempty() {
    return this.item.length === 0;
  }

  print(){
    console.log(this.item.slice().reverse().join(" -> "))
  }
}

const stack=new Stack();

console.log(stack.isempty());
stack.push(12);
stack.push(10);
stack.push(40);
stack.push(50);

stack.print();
console.log(stack.peak());
console.log(stack.isempty());
console.log(stack.pop());
stack.print();





