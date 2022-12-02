class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }

    insert(newNode) {
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let nodePtr = this.root;
            while (nodePtr != null) {
                if (newNode.value <= nodePtr.value) {
                    if (nodePtr.left != null) {
                        nodePtr = nodePtr.left;
                    }
                    else {
                        nodePtr.left = newNode;
                        return;
                    }
                }
                if (newNode.value >= nodePtr.value) {
                    if (nodePtr.right != null) {
                        nodePtr = nodePtr.right;
                    }
                    else {
                        nodePtr.right = newNode;
                        return;
                    }
                }
            }
        }
    }

    recursiveInsert(newNode, nodePtr){
        if(this.root === null)
            this.root = newNode;
        else{
            if (newNode.value <= nodePtr.value) {
                if (nodePtr.left != null) {
                    this.recursiveInsert(newNode, nodePtr.left);
                }
                else {
                    nodePtr.left = newNode;
                    return;
                }
            }
            if (newNode.value >= nodePtr.value) {
                if (nodePtr.right != null) {
                    this.recursiveInsert(newNode, nodePtr.right);
                }
                else {
                    nodePtr.right = newNode;
                    return;
                }
            }
        }
    }

    printInOrder(nodePtr) {
        if (nodePtr === null)
            return;
        else{
            this.printInOrder(nodePtr.left);
            console.log(nodePtr.value);
            this.printInOrder(nodePtr.right);
            return;
        }
    }
    printPreOrder(nodePtr) {
        if (nodePtr === null)
            return;
        else{
            console.log(nodePtr.value);
            this.printPreOrder(nodePtr.left);
            this.printPreOrder(nodePtr.right);
            return;
        }
    }
    printPostOrder(nodePtr) {
        if (nodePtr === null)
            return;
        else{
            this.printPostOrder(nodePtr.left);
            this.printPostOrder(nodePtr.right);
            console.log(nodePtr.value);
            return;
        }
    }
}

let myTree = new Tree();
// myTree.insert(new Node(10));
// myTree.insert(new Node(8));
// myTree.insert(new Node(11));
// myTree.insert(new Node(22));
// myTree.insert(new Node(12));

myTree.recursiveInsert(new Node(10), myTree.getRoot());
myTree.recursiveInsert(new Node(8), myTree.getRoot());
myTree.recursiveInsert(new Node(11), myTree.getRoot());
myTree.recursiveInsert(new Node(22), myTree.getRoot());
myTree.recursiveInsert(new Node(12), myTree.getRoot());
myTree.recursiveInsert(new Node(7), myTree.getRoot());











myTree.printPostOrder(myTree.getRoot());