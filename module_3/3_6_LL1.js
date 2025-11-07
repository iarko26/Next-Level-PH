class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }

}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;

    }
    _traverseIndex(index) {
        let count=0;
        let currentNode=this.head;
        while(count!==index){
            currentNode=currentNode.next;
            count++;
        }
        return currentNode;

    }
//append end
 append(data){
    const newNode=new Node(data); //create a node
    if(this.head===null){
        this.head=newNode;
        this.tail=newNode;
    }
    else{
       this.tail.next=newNode;
       this.tail=newNode;

    }
    this.length++;
    return this;

 }


  prepend(data) {
    const newNode=new Node(data);
    if(this.head===null){
        this.head=newNode;
        this.tail=newNode;
    }
else{
    newNode.next=this.head;
    this.head=newNode;
}
this.length++;
return this;


  }

  insert(index,value) {
    if(index<0 ||index>this.length ){
        return undefined;
    }

    if(index===0){
       return this.prepend(value);
    }
    if(index===this.length){
        return this.append(value);
    }
    
    
    const prevNode=this._traverseIndex(index-1);
    const holdNode=prevNode.next;
    const newNode=new Node(value);
    prevNode.next=newNode;
    newNode.next=holdNode;
    this.length++;



  }

 removefirst(){
    if(this.length===0){
        return this.tail=null || undefined;
    }
    const removedfirstval=this.head.data;
    this.head=this.head.next;
    this.length--;
    return removedfirstval;
 }

 removelast(){
        if(this.length===0){
        return this.tail=null || undefined;
    }
    const removelastval=this.tail.data;
    if(this.length==1){
        this.head=null;
        this.tail=null;
    }
    else{
        const prevNode=this._traverseIndex(this.length-2);
        prevNode.next=null;
        this.tail=prevNode;


    }
    this.length--;
    return removelastval;

 }

 print(){
    let temp=this.head;
    let arr=[];
    while(temp!=null){
        arr.push(temp.data);
        temp=temp.next;
    }
    console.log(arr.join(" -> "), "-> null")
    
    


 }



}

const ll=new LinkedList();
ll.append(2);
ll.append(3);
ll.append(22);
ll.append(30);
ll.print();
ll.prepend(1);
ll.print();

// ll.insert(3,100);
// ll.print();

// ll.removefirst();
// ll.print();

ll.removelast();
ll.print();



