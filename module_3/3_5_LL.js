class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }

}

const head=new Node(10);

head.next=new Node(20);

head.next.next=new Node(30);
console.log(head);
let temp=head;
while(temp!=null){
    console.log(temp.data, " ");
    temp=temp.next
}