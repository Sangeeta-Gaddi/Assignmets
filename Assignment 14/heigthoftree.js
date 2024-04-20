/*Q. Write a program to find the height of a binary tree*/

//Example:
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function treeheight(root) {
    if (!root) {
      return -1; // Height of an empty tree is -1
    }
    
    let leftheight = treeheight(root.left);
    let rightheight = treeheight(root.right);
    
    return (1 + Math.max(leftheight, rightheight));
  }
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left=new Node(6);
  root.left.left.left = new Node(4);
  root.left.right = new Node(5);

  console.log("Height of the tree:", treeheight(root)); 
  //output:Height of the tree: 3
