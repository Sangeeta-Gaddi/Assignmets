//Q. Write a program for tree traversal like inorder, postorder, preorder//

//1) Inorder Traversal:
//Example:
   class Node {
    constructor(data) {
      this.data = data; 
      this.left = null; 
      this.right = null; 
    }
  }
  
  function inorderTraversal(node) {
    if (node !== null) {
      inorderTraversal(node.left); // Traverse the left subtree recursively
      console.log(node.data); // Output the value of the current node
      inorderTraversal(node.right); // Traverse the right subtree recursively
    }
  }
  
  let rootNode = new Node(6);
  rootNode.left = new Node(5);
  rootNode.right = new Node(7);
  
  console.log("Inorder traversal:");
  inorderTraversal(rootNode);
//output:Inorder traversal:
         5
         6
         7

//2) Preorder Traversal:
//Example:
class Node {
    constructor(data) {
      this.data = data; 
      this.left = null; 
      this.right = null; 
    }
  }
  
  function preorderTraversal(node) {
    if (node !== null) {
      console.log(node.data); 
      preorderTraversal(node.left); 
      preorderTraversal(node.right); 
    }
  }
  
  let rootNode = new Node(6);
  rootNode.left = new Node(5);
  rootNode.right = new Node(7);
  
  console.log("Preorder traversal:");
  preorderTraversal(rootNode);
//output:Preorder traversal:
         6
         5
         7

//3) Postorder Traversal:
//Example:
class Node {
    constructor(data) {
      this.data = data; 
      this.left = null; 
      this.right = null; 
    }
  }
  
  function postorderTraversal(node) {
    if (node !== null) {
      postorderTraversal(node.left); 
      postorderTraversal(node.right); 
      console.log(node.data); 
    }
  }
  
  let rootNode = new Node(6);
  rootNode.left = new Node(5);
  rootNode.right = new Node(7);
  
  console.log("Postorder traversal:");
  postorderTraversal(rootNode);
//output:Postorder traversal:
         5
         7
         6