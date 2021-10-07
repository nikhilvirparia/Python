class Node{
    constructor(val){
        this.val = val;
        this.next = null; // node (.val, .next)
        //THIS IS NEW
        this.child = null; // SLL (.head)
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    printMe(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    //populates each node with a random amount of children from 0 to 4
    populateChildren(){

        let runner = this.head;

        while(runner !== null){
            let numChildren = Math.floor(Math.random() * 5);
            if(numChildren !== 0){
                let childList = new SLL();
                for(let i = 0; i < numChildren; ++i){
                    childList.addToFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }


    }

    flattenChildren() {

        // Runner is equal to this.head.next
        var runner = this.head.next
        // ChildRunner is equal to head
        var cr = this.head
        // Previous is also equal to head
        var prev = this.head

        // While runner is not null iterate through the list
        while(runner) {
            // if previous has child or not
            if(prev.child != null) {
                // Setting Child runner to the child
                cr = prev.child.head;
                //remove of prvious to child pointer
                prev.child = null;
                // Move the prev pointer to child pointer
                prev.next = cr
                // Move the Child runner moves next, check if it's not null
                while(cr.next) {
                   // Cr goes to the next stops before null
                    cr = cr.next
                }
                // ChildRunner has to point to the runner
                cr.next = runner
            }

            // Previous has to be at the runner
            prev = runner

            // Runner goes next node
            runner = runner.next

        }

        // If previous still has child
        if(prev.child) {
            // Setting Child runner to the child
            cr = prev.child.head;
            //remove of prvious to child pointer
            prev.child = null;
            // Move the prev pointer to child pointer
            prev.next = cr
            //console.log("Line 71 ", prev.next);

            // Move the Child runner moves next, check if it's not null
            while(cr.next) {
                //console.log("Line 74 ", cr.val);
                // Cr goes to the next stops before null
                cr = cr.next
            }

            // ChildRunner has to point to the runner
            cr.next = runner
        }

    }
    

    printMeWithChildren(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val}`;
            if(runner.child){
                returnStr += "(";
                let runner2 = runner.child.head;
                while(runner2 !== null){
                    returnStr += `${runner2.val} ->`;
                    runner2 = runner2.next;
                }
                returnStr += ")";
            }
            returnStr += " -> ";
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

var sll = new SLL();
sll.addToFront(5);
sll.addToFront(10);
sll.addToFront(4);
sll.addToFront(8);
sll.populateChildren();
sll.printMeWithChildren();
sll.flattenChildren();
sll.printMe();