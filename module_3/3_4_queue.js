class Queuearray {
  constructor() {
    this.item = [];
  }
  enqueue(val) {
    this.item.push(val);
  }
  dequeue() {
    if (this.isempty()) {
      return undefined;
    }
    return this.item.shift();
  }
  peak() {
    if(this.isempty()){
        return undefined;
    }
    return this.item[0];
  }

  isempty() {
    return this.item.length === 0;
  }

  print(){
    console.log(this.item.join(" -> "))
  }
}

const queue=new Queuearray();

console.log(queue.isempty());
queue.enqueue(12);
queue.enqueue(10);
queue.enqueue(40);
queue.enqueue(50);

queue.print();
console.log(queue.peak());
console.log(queue.isempty());
console.log(queue.dequeue());
queue.print();





