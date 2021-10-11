class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {

    constructor() {
        this.root = null
    }

    findMin() {
        // Find min value

        // Define the root
        var current = this.root

        // while current.left != null
        while (current.left != null) {
            // setting the current to the left
            current = current.left
        }

        // return the current left value
        return current.value

    }

    findMax() {
        //Find max value

        // Define the root
        var current = this.root

        // while current.right != null
        while (current.right != null) {
            // setting the current to the left
            current = current.right
        }

        // Return the current right value
        return current.value

    }

    insertNode(value) {
        // Insert the Node

        // establish the new Node with value
        var newNode = new BSTNode(value);

        // check if this BST is empty
        if(this.root == null) {
            // set the value if the BST is empty
            this.root = newNode;
        } else {
            // set the runner to the root
            let runner = this.root

            // While runner is not equal to null
            while(runner) {

                // if newNode value is greater then runner value
                if(newNode.value > runner.value) {
                    // check if the runner.right is empty
                    if(runner.right == null) {
                        // runner.right is empty place a node there
                        runner.right = newNode
                        return this
                    } else {
                        // increment the runner to the right
                        runner = runner.right
                    }
                }
                    // Check if the runner.left == null
                    if(runner.left == null) {
                        // runner.left is empty then place a new node
                        runner.left = newNode
                        return this
                    } else {
                        //incrment the runner to the left
                        runner = runner.left
                    }

                }
            }

    }

        printBST(node) {

            // if the BST is empty (Edge case)
            if(node == null) {
               return this
            }

            // print out the node with value left and right
            this.printBST(node.left)
            console.log(node.value)

            this.printBST(node.right)

        }

}

var bst = new BST();
bst.insertNode(50)
bst.insertNode(45)
bst.insertNode(40)
bst.insertNode(35)
bst.insertNode(60)
console.log(bst.findMin())
console.log(bst.findMax())
// bst.printBST(bst.root)
