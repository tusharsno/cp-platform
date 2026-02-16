import { Problem } from "@/types";

export const linkedListProblems: Problem[] = [
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    order: 1,
    link: "https://leetcode.com/problems/reverse-linked-list/",
    problemStatement:
      "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    constraints:
      "The number of nodes in the list is the range [0, 5000]. -5000 <= Node.val <= 5000",
    starterCode:
      "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n * this.val = (val===undefined ? 0 : val)\n * this.next = (next===undefined ? null : next)\n * }\n */\nfunction reverseList(head) {\n  // Write your code here\n};",
    handlerFunction: "reverseList",
    starterFunctionName: "reverseList",
  },
  {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List",
    order: 2,
    link: "https://leetcode.com/problems/linked-list-cycle/",
    problemStatement:
      "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
    constraints: "The number of nodes in the list is in the range [0, 10^4].",
    starterCode: "function hasCycle(head) {\n  // Write your code here\n};",
    handlerFunction: "hasCycle",
    starterFunctionName: "hasCycle",
  },
  {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    order: 3,
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    problemStatement:
      "Merge the two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
    constraints: "The number of nodes in both lists is in the range [0, 50].",
    starterCode:
      "function mergeTwoLists(list1, list2) {\n  // Write your code here\n};",
    handlerFunction: "mergeTwoLists",
    starterFunctionName: "mergeTwoLists",
  },
  {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    category: "Linked List",
    order: 4,
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    problemStatement:
      "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    constraints:
      "The number of nodes in the list is sz. 1 <= sz <= 30. 1 <= n <= sz",
    starterCode:
      "function removeNthFromEnd(head, n) {\n  // Write your code here\n};",
    handlerFunction: "removeNthFromEnd",
    starterFunctionName: "removeNthFromEnd",
  },
  {
    id: "reorder-list",
    title: "Reorder List",
    difficulty: "Medium",
    category: "Linked List",
    order: 5,
    link: "https://leetcode.com/problems/reorder-list/",
    problemStatement:
      "You are given the head of a singly linked-list. Reorder the list to follow the pattern: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...",
    constraints:
      "The number of nodes in the list is in the range [1, 5 * 10^4].",
    starterCode: "function reorderList(head) {\n  // Write your code here\n};",
    handlerFunction: "reorderList",
    starterFunctionName: "reorderList",
  },
  {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List",
    order: 6,
    link: "https://leetcode.com/problems/add-two-numbers/",
    problemStatement:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    constraints:
      "The number of nodes in each linked list is in the range [1, 100].",
    starterCode:
      "function addTwoNumbers(l1, l2) {\n  // Write your code here\n};",
    handlerFunction: "addTwoNumbers",
    starterFunctionName: "addTwoNumbers",
  },
  {
    id: "linked-list-cycle-ii",
    title: "Linked List Cycle II",
    difficulty: "Medium",
    category: "Linked List",
    order: 7,
    link: "https://leetcode.com/problems/linked-list-cycle-ii/",
    problemStatement:
      "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.",
    constraints: "The number of nodes in the list is in the range [0, 10^4].",
    starterCode: "function detectCycle(head) {\n  // Write your code here\n};",
    handlerFunction: "detectCycle",
    starterFunctionName: "detectCycle",
  },
  {
    id: "copy-list-with-random-pointer",
    title: "Copy List with Random Pointer",
    difficulty: "Medium",
    category: "Linked List",
    order: 8,
    link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    problemStatement:
      "Construct a deep copy of a list where each node contains an additional random pointer which could point to any node in the list, or null.",
    constraints: "0 <= n <= 1000, -10^4 <= Node.val <= 10^4",
    starterCode:
      "function copyRandomList(head) {\n  // Write your code here\n};",
    handlerFunction: "copyRandomList",
    starterFunctionName: "copyRandomList",
  },
  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List",
    order: 9,
    link: "https://leetcode.com/problems/merge-k-sorted-lists/",
    problemStatement:
      "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    constraints:
      "k == lists.length. 0 <= k <= 10^4. 0 <= lists[i].length <= 500",
    starterCode: "function mergeKLists(lists) {\n  // Write your code here\n};",
    handlerFunction: "mergeKLists",
    starterFunctionName: "mergeKLists",
  },
  {
    id: "reverse-nodes-in-k-group",
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    category: "Linked List",
    order: 10,
    link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    problemStatement:
      "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.",
    constraints: "The number of nodes in the list is n. 1 <= k <= n <= 5000.",
    starterCode:
      "function reverseKGroup(head, k) {\n  // Write your code here\n};",
    handlerFunction: "reverseKGroup",
    starterFunctionName: "reverseKGroup",
  },
];
