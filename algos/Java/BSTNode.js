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

        size(node) {
            // if the BST is empty (Edge case)
            if (node == null) {
                return 0
            } else {
                // This.left and this.right + 1 root
                // Goes left and right and addes + 1 everytime it hits a node
                return this.size(node.left) + this.size(node.right) + 1
            }
        }

    contains(node, value, count) {
       // console.log(node.value)
        // if the BST is empty (Edge case)
        console.log("before the exit", count)
        if(node == null) {
            return count
        }

        // go through the each of the node
        // if node equals to the value then it returns true and done with method
       console.log(node.value , value)
        if(node.value == value) {
            console.log(true)
            count++
            //return true
            console.log(count)
            return this.contains(node.left, value, count + 1) , this.contains(node.right, value, count + 1)
        }

            // find the contains after placing the node
            // with value left and right
          return this.contains(node.left, value, count) , this.contains(node.right, value, count)

      }

      height(node) {

        //if Node is null then return node
        if(node == null) {
            return 0
        } else {
            // split the tree in half
            // delcaring the left depth
            let ldepth = this.height(node.left)
            // delcaring the right depth
            let rdepth = this.height(node.right)

            // if left depth is greater then right depth
            if(ldepth > rdepth) {
                // + 1 does not count the root
                return (ldepth + 1);
            } else {
                return (rdepth + 1);
            }
        }


      }

      isbalance(node) {

          //if Node is null then return node
          if(node == null) {
              return 0
          } else {
              // split the tree in half
              // delcaring the left depth
              let ldepth = this.height(node.left)
              // delcaring the right depth
              let rdepth = this.height(node.right)

             // let absolute = ldepth - rdepth

              // if left depth is between
              if(Math.abs(ldepth - rdepth) <= 1) {
                  // return true
                  return true;
              } else {
                  // return false
                  return false;
              }
          }

      }

      remove(node, value) {

        // Base case if node is null then return null
        if(node == null) {
            return node
        }

        // if value is on the left side
        if(value < node.value) {
           //console.log("Here is if")
            // Going to the left side of the tree
            node.left == this.remove(node.left, value)
            //console.log("Here is if after remove")
        } else if ( value > node.value ) {

            // Going to the right side of the tree
            node.right == this.remove(node.right, value)

        }

        else {
              console.log("test")
            // check if the node.child is null
            // if left.left is null then return left node
            if(node.left == null) {
                console.log("here")
                return node.right
                // if root.right is null then return left node
            } else if (node.right == null) {
                console.log("there")
                return node.left
            }
            console.log("here")
            // Returns the Min value to the right
            node.value = this.Min(node.right)

            // removes in order sucesser
            node.right = this.remove(node.right, node.value)


        }

        return node
      }

      // keep track of the parent
      removekey(value) {

        this.root = this.remove(this.root, value)

      }


    Min(node) {

        let minv = node.value

        // while current.left != null
        while (node.left != null) {
           // Setting the min value to the variable, and pass it to return
            minv = node.value

            // setting the current to the left
            node = node.left


        }

        // return the minv
        return minv

    }
    // find the right solution

    function deleteKey(key)
    {
        this.root = this.deleteRec(this.root, key);
    }

    function deleteRec(root,key)
    {
        if (root == null) return root;
        if (key < root.key) root.left = this.deleteRec(root.left, key);
        else if (key > root.key) root.right = this.deleteRec(root.right, key);
        else {
            if (root.left == null) return root.right;
            else if (root.right == null) return root.left;
            root.key = this.minValue(root.right);
            root.right = this.deleteRec(root.right, root.key);
        }
        return root;
    }
    function minValue(root)
    {
        let minv = root.key;
        while (root.left != null)
        {
            minv = root.left.key;
            root = root.left;
        }
        return minv;
    }



}

var bst = new BST();
// bst.insertNode(50)
bst.insertNode(45)
bst.insertNode(40)
bst.insertNode(35)
bst.insertNode(60)
bst.insertNode(70)
bst.insertNode(36)
bst.insertNode(41)
// console.log(bst.findMin())
// console.log(bst.findMax())
// console.log(bst.size())
bst.printBST(bst.root)
// console.log(bst.contains(bst.root, 70, 0))
// console.log(bst.isbalance(bst.root))
// console.log(bst.height(bst.root))
//console.log(bst.size(bst.root));
console.log(bst.removekey(35))

bst.printBST(bst.root)

