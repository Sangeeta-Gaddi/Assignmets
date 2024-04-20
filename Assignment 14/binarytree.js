/*Q. Construct a  binary tree structure of your own choice*/

//Example:
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

let rootNode=new Node(6);
let leftNode=new Node(4);
let rightNode=new Node(7);

rootNode.leftchild=leftNode;
rootNode.rightchild=rightNode;

console.log("Root node is:",rootNode.data);
console.log("Leftchild is:",rootNode.leftchild.data);
console.log("Rightchild is:",rootNode.rightchild.data);
/*output:
Root node is: 6
Leftchild is: 4
 Rightchild is: 7*/