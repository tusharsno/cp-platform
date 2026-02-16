import { Problem } from "@/types";

export const binaryTreeProblems: Problem[] = [
  {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Binary Tree",
    order: 1,
    link: "https://leetcode.com/problems/invert-binary-tree/",
    problemStatement:
      "Given the root of a binary tree, invert the tree, and return its root.",
    constraints:
      "The number of nodes in the tree is in the range [0, 100]. -100 <= Node.val <= 100",
    starterCode: "function invertTree(root) {\n  // Write your code here\n};",
    handlerFunction: "invertTree",
    starterFunctionName: "invertTree",
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Binary Tree",
    order: 2,
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    problemStatement:
      "Find the maximum depth (number of nodes along the longest path from the root node down to the farthest leaf node).",
    constraints: "The number of nodes in the tree is in the range [0, 10^4].",
    starterCode: "function maxDepth(root) {\n  // Write your code here\n};",
    handlerFunction: "maxDepth",
    starterFunctionName: "maxDepth",
  },
  {
    id: "same-tree",
    title: "Same Tree",
    difficulty: "Easy",
    category: "Binary Tree",
    order: 3,
    link: "https://leetcode.com/problems/same-tree/",
    problemStatement:
      "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
    constraints: "The number of nodes in both trees is in the range [0, 100].",
    starterCode: "function isSameTree(p, q) {\n  // Write your code here\n};",
    handlerFunction: "isSameTree",
    starterFunctionName: "isSameTree",
  },
  {
    id: "subtree-of-another-tree",
    title: "Subtree of Another Tree",
    difficulty: "Easy",
    category: "Binary Tree",
    order: 4,
    link: "https://leetcode.com/problems/subtree-of-another-tree/",
    problemStatement: "Check if tree 'subRoot' is a subtree of tree 'root'.",
    constraints: "The number of nodes in the root tree is up to 2000.",
    starterCode:
      "function isSubtree(root, subRoot) {\n  // Write your code here\n};",
    handlerFunction: "isSubtree",
    starterFunctionName: "isSubtree",
  },
  {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Binary Tree",
    order: 5,
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    problemStatement:
      "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    constraints: "The number of nodes in the tree is in the range [0, 2000].",
    starterCode: "function levelOrder(root) {\n  // Write your code here\n};",
    handlerFunction: "levelOrder",
    starterFunctionName: "levelOrder",
  },
  {
    id: "binary-tree-right-side-view",
    title: "Binary Tree Right Side View",
    difficulty: "Medium",
    category: "Binary Tree",
    order: 6,
    link: "https://leetcode.com/problems/binary-tree-right-side-view/",
    problemStatement:
      "Imagine yourself standing on the right side of a binary tree, return the values of the nodes you can see ordered from top to bottom.",
    constraints: "The number of nodes in the tree is in the range [0, 100].",
    starterCode:
      "function rightSideView(root) {\n  // Write your code here\n};",
    handlerFunction: "rightSideView",
    starterFunctionName: "rightSideView",
  },
  {
    id: "lowest-common-ancestor-of-a-binary-tree",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    category: "Binary Tree",
    order: 7,
    link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    problemStatement:
      "Find the lowest common ancestor (LCA) of two given nodes in the tree.",
    constraints: "The number of nodes in the tree is in the range [2, 10^5].",
    starterCode:
      "function lowestCommonAncestor(root, p, q) {\n  // Write your code here\n};",
    handlerFunction: "lowestCommonAncestor",
    starterFunctionName: "lowestCommonAncestor",
  },
  {
    id: "construct-binary-tree-from-preorder-and-inorder-traversal",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    category: "Binary Tree",
    order: 8,
    link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    problemStatement:
      "Given two integer arrays preorder and inorder, construct and return the binary tree.",
    constraints:
      "1 <= preorder.length <= 3000, inorder.length == preorder.length",
    starterCode:
      "function buildTree(preorder, inorder) {\n  // Write your code here\n};",
    handlerFunction: "buildTree",
    starterFunctionName: "buildTree",
  },
  {
    id: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    category: "Binary Tree",
    order: 9,
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    problemStatement:
      "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. Return the maximum path sum of any non-empty path.",
    constraints:
      "The number of nodes in the tree is in the range [1, 3 * 10^4].",
    starterCode: "function maxPathSum(root) {\n  // Write your code here\n};",
    handlerFunction: "maxPathSum",
    starterFunctionName: "maxPathSum",
  },
  {
    id: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    category: "Binary Tree",
    order: 10,
    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    problemStatement:
      "Design an algorithm to serialize and deserialize a binary tree.",
    constraints: "The number of nodes in the tree is in the range [0, 10^4].",
    starterCode: "function serialize(root) {};\nfunction deserialize(data) {};",
    handlerFunction: "serialize",
    starterFunctionName: "serialize",
  },
];
