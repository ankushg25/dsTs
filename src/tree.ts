// Tree Implementation
/**
 * Base Node for Basic Tree implementation
 * @member left -> tree with elements < data
 * @member data -> Number
 * @member right -> tree with elements > data
 */
class tNode {
    left: tNode = null;
    data: Number = null;
    right: tNode = null;

    constructor(data: Number) {
        this.data = data;
    }
}


/**
 * Simple Binary Tree Implementation in typescript
 * @method insert -> Add Element to a binary tree
 * @method search -> Search if element exists in a tree
 * @method parse -> return the elements of the tree (Inorder Traversal)
 */
class Tree {
    root: tNode = null;

    constructor(data: number) {
        this.root = new tNode(data);
    }

    // Inset in a tree
    insert(node: tNode, data: number) {
        if (node == null) return new tNode(data);
        if (data > node.data) node.right = this.insert(node.right, data);
        else node.left = this.insert(node.left, data);
        return node;
    }

    // Search if Element exists in a tree
    search(node: tNode, data: number) {
        if (node == null) return null;
        if (data > node.data) node = this.search(node.right, data);
        else if (data < node.data) node = this.search(node.left, data);
        return node
    }

    // Inorder Traversal
    parse(node: tNode) {
        if (node === null) return;
        this.parse(node.left);
        console.log(node.data);
        this.parse(node.right);
    }
}