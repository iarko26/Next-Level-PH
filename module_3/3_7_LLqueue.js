class Node{
   constructor(data){
    this.data=data;
    this.next=null;

   }
}

class LLQueue{
    constructor(){
       this.first=null;
        this.last=null;
        this.length=0;

    }

    enqueue(data){
        const newNode=new Node(data);
        
        if(this.isEmpty()){
            this.first=newNode;
            this.last=newNode;
        }
        else{
          
this.last.next=newNode;
this.last=newNode;

        }
        this.length++;
        return this;
    }

    dequeue(){
 if(this.isEmpty()){
        this.last=null;
     }

     if(this.first===this.last
     ){
        this.last=null;
     }

     const removeNode=this.first.data;
     this.first=this.first.next;
     this.length--;

     return removeNode;
    }

    peak(){
     if(this.isEmpty()){
        return undefined;
     }
     return this.first.data;
    }

    isEmpty(){
        return this.length===0;
    }


    print(){
        let temp=this.first;
        const arr=[];
        while(temp){
            arr.push(temp.data);
            temp=temp.next;
        }
        console.log(arr.join(" -> "));
        
        
    }
}


const queuell=new LLQueue();
queuell.enqueue(2);
queuell.enqueue(3);
queuell.enqueue(6);
queuell.enqueue(10);

queuell.print();

console.log(queuell.peak());

queuell.dequeue();
queuell.print();
