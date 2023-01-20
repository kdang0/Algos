/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(node === null) return node;
    if(visited.has(node)) return visited.get(node);
    const cloneNode = new Node(node.val);
    visited.set(node,cloneNode);
    for(neighbor of node.neighbors){
        cloneNode.neighbors.push(cloneGraph(neighbor, visited));
    }

    return cloneNode;
};
// @lc code=end

