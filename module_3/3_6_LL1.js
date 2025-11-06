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


//   prepend() {}

//   insert() {}

//   remove() {}

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
ll.print();




