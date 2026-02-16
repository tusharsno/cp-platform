import { Problem } from "@/types";

export const bstProblems: Problem[] = [
  {
    id: "search-in-a-binary-search-tree",
    title: "Search in a Binary Search Tree",
    difficulty: "Easy",
    category: "BST",
    order: 1,
    link: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    problemStatement:
      "Find the node in the BST that the node's value equals val and return the subtree rooted with that node.",
    constraints: "The number of nodes in the tree is in the range [1, 5000].",
    starterCode:
      "function searchBST(root, val) {\n  // Write your code here\n};",
    handlerFunction: "searchBST",
    starterFunctionName: "searchBST",
  },
  {
    id: "lowest-common-ancestor-of-a-binary-search-tree",
    title: "Lowest Common Ancestor of a BST",
    difficulty: "Easy",
    category: "BST",
    order: 2,
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    problemStatement:
      "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
    constraints: "The number of nodes in the tree is in the range [2, 10^5].",
    starterCode:
      "function lowestCommonAncestor(root, p, q) {\n  // Write your code here\n};",
    handlerFunction: "lowestCommonAncestor",
    starterFunctionName: "lowestCommonAncestor",
  },
  {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "BST",
    order: 3,
    link: "https://leetcode.com/problems/validate-binary-search-tree/",
    problemStatement:
      "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    constraints: "The number of nodes in the tree is in the range [1, 10^4].",
    starterCode: "function isValidBST(root) {\n  // Write your code here\n};",
    handlerFunction: "isValidBST",
    starterFunctionName: "isValidBST",
  },
  {
    id: "kth-smallest-element-in-a-bst",
    title: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    category: "BST",
    order: 4,
    link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    problemStatement:
      "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    constraints: "The number of nodes in the tree is n. 1 <= k <= n <= 10^4.",
    starterCode:
      "function kthSmallest(root, k) {\n  // Write your code here\n};",
    handlerFunction: "kthSmallest",
    starterFunctionName: "kthSmallest",
  },
  {
    id: "insert-into-a-binary-search-tree",
    title: "Insert into a Binary Search Tree",
    difficulty: "Medium",
    category: "BST",
    order: 5,
    link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    problemStatement:
      "Insert a value into the BST and return the root node of the BST after the insertion.",
    constraints: "The number of nodes in the tree is in the range [0, 10^4].",
    starterCode:
      "function insertIntoBST(root, val) {\n  // Write your code here\n};",
    handlerFunction: "insertIntoBST",
    starterFunctionName: "insertIntoBST",
  },
  {
    id: "delete-node-in-a-bst",
    title: "Delete Node in a BST",
    difficulty: "Medium",
    category: "BST",
    order: 6,
    link: "https://leetcode.com/problems/delete-node-in-a-bst/",
    problemStatement:
      "Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference.",
    constraints: "The number of nodes in the tree is in the range [0, 10^4].",
    starterCode:
      "function deleteNode(root, key) {\n  // Write your code here\n};",
    handlerFunction: "deleteNode",
    starterFunctionName: "deleteNode",
  },
  {
    id: "convert-sorted-array-to-binary-search-tree",
    title: "Convert Sorted Array to BST",
    difficulty: "Easy",
    category: "BST",
    order: 7,
    link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    problemStatement:
      "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
    constraints: "1 <= nums.length <= 10^4",
    starterCode:
      "function sortedArrayToBST(nums) {\n  // Write your code here\n};",
    handlerFunction: "sortedArrayToBST",
    starterFunctionName: "sortedArrayToBST",
  },
  {
    id: "binary-search-tree-iterator",
    title: "Binary Search Tree Iterator",
    difficulty: "Medium",
    category: "BST",
    order: 8,
    link: "https://leetcode.com/problems/binary-search-tree-iterator/",
    problemStatement:
      "Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST).",
    constraints: "The number of nodes in the tree is in the range [1, 10^5].",
    starterCode:
      "var BSTIterator = function(root) {};\nBSTIterator.prototype.next = function() {};\nBSTIterator.prototype.hasNext = function() {};",
    handlerFunction: "BSTIterator",
    starterFunctionName: "BSTIterator",
  },
  {
    id: "recover-binary-search-tree",
    title: "Recover Binary Search Tree",
    difficulty: "Hard",
    category: "BST",
    order: 9,
    link: "https://leetcode.com/problems/recover-binary-search-tree/",
    problemStatement:
      "You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.",
    constraints: "The number of nodes in the tree is in the range [2, 1000].",
    starterCode: "function recoverTree(root) {\n  // Write your code here\n};",
    handlerFunction: "recoverTree",
    starterFunctionName: "recoverTree",
  },
  {
    id: "largest-bst-subtree",
    title: "Largest BST Subtree",
    difficulty: "Hard",
    category: "BST",
    order: 10,
    link: "https://leetcode.com/problems/largest-bst-subtree/",
    problemStatement:
      "Given the root of a binary tree, find the largest subtree which is a Binary Search Tree (BST), where largest means subtree with largest number of nodes in it.",
    constraints: "The number of nodes in the tree is in the range [0, 10^4].",
    starterCode:
      "function largestBSTSubtree(root) {\n  // Write your code here\n};",
    handlerFunction: "largestBSTSubtree",
    starterFunctionName: "largestBSTSubtree",
  },
];
