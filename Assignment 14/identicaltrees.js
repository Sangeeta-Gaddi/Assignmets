//Q. Given two tree structure check whether they are identical or not.

// * Identical trees:
//-> Two trees are considered identical if they have the same structure and the same values at each corresponding node.

//Example:
// Define a TreeNode class to represent each node in the tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to determine whether two trees are identical
function areTreesIdentical(tree1, tree2) {

    // If both trees are null, they are identical
    if (tree1 === null && tree2 === null) {
        return true;
    }

    // If one of the trees is null and the other is not, they are not identical
    if (tree1 === null || tree2 === null) {
        return false;
    }

    // Compare the values at the current nodes 
    if (tree1.value !== tree2.value){
        return false;
    }

   // Recursively check left children
    let areLeftChildrenIdentical = areTreesIdentical(tree1.left, tree2.left);
    if (!areLeftChildrenIdentical){
    return false;
}
    let areRightChildrenIdentical = areTreesIdentical(tree1.right, tree2.right);
    if (!areRightChildrenIdentical){
    return false;
}
return true;

}

// Create the first tree
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

// Create the second tree
let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

// Check whether the trees are identical
let areIdentical = areTreesIdentical(tree1,tree2);

console.log(areIdentical);
//output:true