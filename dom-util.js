
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  callback(node);
  if (node.childNodes !== null){
  node.childNodes.forEach(smallerNode => visitAllNodes(smallerNode, callback))
  } 
}; 

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  var arr = [];
  visitAllNodes(node, currentNode => {arr.push(currentNode)})
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};