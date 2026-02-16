import { Problem } from "@/types";

export const graphProblems: Problem[] = [
  {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph",
    order: 1,
    link: "https://leetcode.com/problems/number-of-islands/",
    problemStatement:
      "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    constraints: "m == grid.length, n == grid[i].length, 1 <= m, n <= 300",
    starterCode: "function numIslands(grid) {\n  // Write your code here\n};",
    handlerFunction: "numIslands",
    starterFunctionName: "numIslands",
  },
  {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "Graph",
    order: 2,
    link: "https://leetcode.com/problems/clone-graph/",
    problemStatement:
      "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",
    constraints: "The number of nodes in the graph is between 0 and 100.",
    starterCode: "function cloneGraph(node) {\n  // Write your code here\n};",
    handlerFunction: "cloneGraph",
    starterFunctionName: "cloneGraph",
  },
  {
    id: "max-area-of-island",
    title: "Max Area of Island",
    difficulty: "Medium",
    category: "Graph",
    order: 3,
    link: "https://leetcode.com/problems/max-area-of-island/",
    problemStatement:
      "Find the maximum area of an island in a given 2D binary grid. An island is a group of 1's connected 4-directionally.",
    constraints: "m == grid.length, n == grid[i].length, 1 <= m, n <= 50",
    starterCode:
      "function maxAreaOfIsland(grid) {\n  // Write your code here\n};",
    handlerFunction: "maxAreaOfIsland",
    starterFunctionName: "maxAreaOfIsland",
  },
  {
    id: "pacific-atlantic-water-flow",
    title: "Pacific Atlantic Water Flow",
    difficulty: "Medium",
    category: "Graph",
    order: 4,
    link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    problemStatement:
      "Return a list of grid coordinates where rain water can flow to both the Pacific and Atlantic oceans.",
    constraints:
      "m == heights.length, n == heights[r].length, 1 <= m, n <= 200",
    starterCode:
      "function pacificAtlantic(heights) {\n  // Write your code here\n};",
    handlerFunction: "pacificAtlantic",
    starterFunctionName: "pacificAtlantic",
  },
  {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph",
    order: 5,
    link: "https://leetcode.com/problems/course-schedule/",
    problemStatement:
      "There are a total of numCourses you have to take. Some courses have prerequisites. Determine if you can finish all courses (Detect Cycle in Directed Graph).",
    constraints: "1 <= numCourses <= 2000, 0 <= prerequisites.length <= 5000",
    starterCode:
      "function canFinish(numCourses, prerequisites) {\n  // Write your code here\n};",
    handlerFunction: "canFinish",
    starterFunctionName: "canFinish",
  },
  {
    id: "number-of-connected-components-in-an-undirected-graph",
    title: "Connected Components",
    difficulty: "Medium",
    category: "Graph",
    order: 6,
    link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    problemStatement:
      "Given n nodes and a list of edges, find the number of connected components in the graph.",
    constraints: "1 <= n <= 2000, 0 <= edges.length <= 5000",
    starterCode:
      "function countComponents(n, edges) {\n  // Write your code here\n};",
    handlerFunction: "countComponents",
    starterFunctionName: "countComponents",
  },
  {
    id: "graph-valid-tree",
    title: "Graph Valid Tree",
    difficulty: "Medium",
    category: "Graph",
    order: 7,
    link: "https://leetcode.com/problems/graph-valid-tree/",
    problemStatement:
      "Given n nodes labeled from 0 to n-1 and a list of undirected edges, write a function to check whether these edges make up a valid tree.",
    constraints: "1 <= n <= 2000, 0 <= edges.length <= 5000",
    starterCode:
      "function validTree(n, edges) {\n  // Write your code here\n};",
    handlerFunction: "validTree",
    starterFunctionName: "validTree",
  },
  {
    id: "redundant-connection",
    title: "Redundant Connection",
    difficulty: "Medium",
    category: "Graph",
    order: 8,
    link: "https://leetcode.com/problems/redundant-connection/",
    problemStatement:
      "Return an edge that can be removed so that the resulting graph is a tree of n nodes.",
    constraints: "n == edges.length, 3 <= n <= 1000",
    starterCode:
      "function findRedundantConnection(edges) {\n  // Write your code here\n};",
    handlerFunction: "findRedundantConnection",
    starterFunctionName: "findRedundantConnection",
  },
  {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph",
    order: 9,
    link: "https://leetcode.com/problems/word-ladder/",
    problemStatement:
      "Find the length of the shortest transformation sequence from beginWord to endWord such that only one letter can be changed at a time.",
    constraints: "1 <= beginWord.length <= 10, wordList.length <= 5000",
    starterCode:
      "function ladderLength(beginWord, endWord, wordList) {\n  // Write your code here\n};",
    handlerFunction: "ladderLength",
    starterFunctionName: "ladderLength",
  },
  {
    id: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "Hard",
    category: "Graph",
    order: 10,
    link: "https://leetcode.com/problems/alien-dictionary/",
    problemStatement:
      "Given a list of strings from an alien language's dictionary sorted lexicographically, return the order of characters in this language.",
    constraints: "1 <= words.length <= 100, 1 <= words[i].length <= 100",
    starterCode: "function alienOrder(words) {\n  // Write your code here\n};",
    handlerFunction: "alienOrder",
    starterFunctionName: "alienOrder",
  },
];
