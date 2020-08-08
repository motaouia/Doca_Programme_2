class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = Math.floor(Math.random() * 20) +1;;
    
  }

insertLevelOrder(myInputArray, root, indx){
    if (myInputArray instanceof Array) {
      if(indx < myInputArray.length){
      var nodeTemp = new Node(myInputArray[indx]);
      root = nodeTemp;

      // insert left child 
      root.left = this.insertLevelOrder(myInputArray, root.left,
        2 * indx + 1); 

      // insert right child 
      root.right = this.insertLevelOrder(myInputArray, root.right, 2 * indx + 2);   

     }
     return root;
   }else{
     return null;
  }
}
  
}

const bst = new BST();
var randLvl = bst.size;
var randArrayInt = [];


for(var i=0; i< randLvl ; i++){
  var randValueInt = Math.floor(Math.random() * 10);
  randArrayInt.push(randValueInt);
}

randArrayInt =  randArrayInt.sort();
console.log(randArrayInt);
//
bst.root = bst.insertLevelOrder(randArrayInt, bst.root, 0);

console.log(bst);